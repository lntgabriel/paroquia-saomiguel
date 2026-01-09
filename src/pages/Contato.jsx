import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram } from 'lucide-react';

const Contato = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Função FAKE de envio (só pra mostrar pro padre funcionando)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Obrigado! Sua mensagem foi enviada para a secretaria. (Simulação)");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-parish-dark">Fale Conosco</h1>
          <p className="mt-4 text-gray-600">
            Dúvidas, intenções de missa ou agendamentos? Entre em contato com nossa secretaria.
          </p>
          <div className="mt-6 h-1 w-20 bg-parish-terracotta rounded mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* LADO ESQUERDO: Informações e Mapa */}
          <div className="bg-parish-dark text-parish-light p-10 md:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6 text-white">Secretaria Paroquial</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-parish-gold mt-1" />
                  <p>Travessa Pé de Manacá, 57 - Jardim da Conquista<br/>São Paulo - SP, 08345-200</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="text-parish-gold" />
                  <p>(11) 2253-7499</p>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="text-parish-gold" />
                  <p>secretaria@paroquiaskm.com.br</p>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-parish-gold mt-1" />
                  <div>
                    <p className="font-bold mb-1">Horário de Atendimento:</p>
                    <p className="text-sm opacity-80">Seg - Sex: 08h às 12h | 13h às 17h</p>
                    <p className="text-sm opacity-80">Sábado: 08h às 12h</p>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="mt-8 flex gap-4">
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-parish-terracotta transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-parish-terracotta transition-colors">
                  <Facebook size={24} />
                </a>
              </div>
            </div>

            {/* Mapa Embed (FALSO, peguei um iframe genérico do Google) */}
            <div className="mt-10 rounded-xl overflow-hidden h-64 border border-white/20">
              <iframe 
                src="https://www.google.com/maps/search/paróquia+são+miguel+arcanjo/@-23.6105253,-46.4447339,11z?entry=s&sa=X&ved=1t%3A199789" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
                title="Mapa da Paróquia"
              ></iframe>
            </div>
          </div>

          {/* LADO DIREITO: Formulário */}
          <div className="p-10 md:p-12">
            <h3 className="text-2xl font-serif font-bold text-parish-brown mb-6">Envie sua mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Seu Nome</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-parish-gold focus:ring-0 focus:outline-none transition-all"
                  placeholder="Nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Seu E-mail ou Telefone</label>
                <input 
                  required
                  type="text" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-parish-gold focus:ring-0 focus:outline-none transition-all"
                  placeholder="contato@exemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-parish-gold focus:ring-0 focus:outline-none">
                  <option>Dúvidas Gerais</option>
                  <option>Intenção de Missa</option>
                  <option>Dízimo</option>
                  <option>Agendamento com Padre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea 
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-parish-gold focus:ring-0 focus:outline-none transition-all resize-none"
                  placeholder="Escreva sua mensagem aqui..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full flex justify-center items-center gap-2 py-4 bg-parish-terracotta text-white font-bold rounded-lg hover:bg-red-900 transition-all transform hover:-translate-y-1 shadow-lg"
              >
                <Send size={20} />
                Enviar Mensagem
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contato;