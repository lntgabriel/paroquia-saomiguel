import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Contato = () => {
  // Estado para armazenar o formulário
  const [formData, setFormData] = useState({ name: '', assunto: 'Dúvidas Gerais', message: '' });

  // MÁGICA: Monta a mensagem e abre o WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Pega o número da secretaria (formato internacional sem +)
    const numeroSecretaria = "551122537499"; // (11) 2253-7499

    // 2. Monta o texto bonito
    const texto = `
*Olá, vim pelo Site da Paróquia!*
🕊️ *Assunto:* ${formData.assunto}

👤 *Nome:* ${formData.name}
📝 *Mensagem:* 
${formData.message}
    `;

    // 3. Cria o link e abre
    const linkZap = `https://wa.me/${numeroSecretaria}?text=${encodeURIComponent(texto)}`;
    window.open(linkZap, '_blank');
  };

  return (
    // pb-32 no mobile pra não encostar na barra
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-32 pb-32 md:pb-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-parish-terracotta font-bold tracking-widest uppercase text-xs">Atendimento</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-parish-dark mt-2">Fale Conosco</h1>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto text-sm md:text-base">
            Estamos prontos para atender você. Entre em contato ou faça-nos uma visita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-12 bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* LADO ESQUERDO (Escuro) */}
          <div className="bg-parish-dark text-parish-light p-8 md:p-12 flex flex-col justify-between order-2 lg:order-1 relative">
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-8 text-white border-l-4 border-parish-gold pl-4">
                Secretaria Paroquial
              </h3>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/10 rounded-lg group-hover:bg-parish-gold/20 transition-colors">
                     <MapPin className="text-parish-gold" size={24}/>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider opacity-60">Endereço</span>
                    <p className="font-serif text-lg leading-tight mt-1">
                        Travessa Pé de Manacá, 57 <br/> Jardim da Conquista<br/>
                        <span className="text-sm opacity-60 font-sans">São Paulo - SP, 08345-200</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/10 rounded-lg group-hover:bg-parish-gold/20 transition-colors">
                     <Phone className="text-parish-gold" size={24}/>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider opacity-60">Telefone Fixo</span>
                    <p className="font-mono text-lg mt-1 font-bold">(11) 2253-7499</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/10 rounded-lg group-hover:bg-parish-gold/20 transition-colors">
                     <Clock className="text-parish-gold" size={24}/>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider opacity-60">Horário</span>
                    <div className="mt-1 text-sm space-y-1">
                       <p><strong className="text-white">Seg - Sex:</strong> 08h às 12h | 13h às 17h</p>
                       <p><strong className="text-white">Sábado:</strong> 08h às 12h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redes */}
              <div className="mt-10 md:mt-12 flex gap-4 pt-8 border-t border-white/10">
                <a href="#" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-parish-terracotta hover:border-parish-terracotta hover:text-white transition-all text-gray-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all text-gray-300">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Mapa Embutido - Agora com link correto do Google Maps Embed API */}
            {/* Truque: Como não temos API KEY, usamos o iframe 'pb' gerado manualmente para esse endereço */}
            <div className="mt-8 rounded-xl overflow-hidden h-48 md:h-56 border border-white/10 shadow-lg relative z-10 opacity-90 hover:opacity-100 transition-opacity">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.326270729792!2d-46.476175423877965!3d-23.59262276273879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6f3630f9a7ab%3A0x892e847c23498877!2sTv.%20P%C3%A9%20de%20Manac%C3%A1%2C%2057%20-%20Jardim%20da%20Conquista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008345-200!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
                title="Mapa Paróquia"
                className="filter grayscale-[30%]"
              ></iframe>
            </div>
          </div>

          {/* LADO DIREITO (Formulário para Whatsapp) */}
          <div className="p-8 md:p-12 order-1 lg:order-2">
            <div className="mb-8">
               <h3 className="text-2xl font-serif font-bold text-parish-dark flex items-center gap-2">
                 <MessageCircle className="text-green-600" size={28}/> 
                 Mensagem Rápida
               </h3>
               <p className="text-gray-500 text-sm mt-2">Preencha abaixo para iniciar uma conversa direto no WhatsApp da secretaria.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Seu Nome</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all outline-none"
                  placeholder="Ex: Maria da Silva"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Assunto</label>
                <div className="relative">
                    <select 
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all outline-none appearance-none cursor-pointer"
                        value={formData.assunto}
                        onChange={(e) => setFormData({...formData, assunto: e.target.value})}
                    >
                    <option>Dúvidas Gerais</option>
                    <option>Intenção de Missa</option>
                    <option>Agendamento com Padre</option>
                    <option>Secretaria / Documentos</option>
                    <option>Pastoral do Dízimo</option>
                    </select>
                    {/* Seta do select */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Mensagem</label>
                <textarea 
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all outline-none resize-none"
                  placeholder="Olá, gostaria de saber sobre..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full flex justify-center items-center gap-2 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <MessageCircle size={20} />
                Enviar no WhatsApp
              </button>
              
              <p className="text-center text-[10px] text-gray-400 mt-2">
                 Ao clicar, você será redirecionado para o app.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contato;