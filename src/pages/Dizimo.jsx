import React, { useState } from 'react';
import { HeartHandshake, QrCode, Building, Users, Globe, Copy, Check, Sparkles } from 'lucide-react';
import { db } from '../services/firebaseConnection';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Dizimo = () => {
  const [form, setForm] = useState({ nome: '', telefone: '' });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Copiar chave PIX
  const handleCopy = () => {
    navigator.clipboard.writeText("00.000.000/0001-00");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "interessados_dizimo"), {
        nome: form.nome,
        telefone: form.telefone,
        data: serverTimestamp(),
        origem: "Pagina Dízimo"
      });
      alert("Cadastro recebido! A pastoral entrará em contato. Deus abençoe!");
      setForm({ nome: '', telefone: '' });
    } catch (err) {
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // Fundo Bege Texturizado (igual da Agenda)
    <div className="min-h-screen bg-[#f4f1ea] pt-32 pb-20 relative overflow-hidden">
      
      {/* Luz de fundo decorativa */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/40 rounded-full blur-3xl pointer-events-none -mt-40 -mr-20"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* --- CABEÇALHO --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-parish-terracotta/10 text-parish-terracotta px-4 py-1.5 rounded-full mb-4">
             <Sparkles size={16} />
             <span className="text-xs font-bold uppercase tracking-widest">Devolução Consciente</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-parish-dark mb-4">
            Seja um Dizimista
          </h1>
          <div className="max-w-2xl mx-auto">
             <div className="h-1 w-20 bg-parish-gold mx-auto mb-6 rounded-full"></div>
             <p className="text-xl text-parish-brown italic font-serif leading-relaxed">
               "Dê cada um conforme o impulso do seu coração, sem tristeza nem constrangimento. 
               Deus ama quem dá com alegria." (2 Cor 9, 7)
             </p>
          </div>
        </div>

        {/* --- AS 3 DIMENSÕES (CARDS REFEITOS) --- */}
        {/* Agora são cards brancos flutuantes sobre o bege */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
           
           {/* Card Manutenção */}
           <div className="bg-white p-8 rounded-2xl shadow-xl shadow-blue-900/5 hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <Building size={28} />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-3 text-parish-dark">Manutenção</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Cuida do templo físico: limpeza, energia, água e funcionários. Mantém a casa de Deus digna e acolhedora para receber você e sua família.
                </p>
              </div>
           </div>

           {/* Card Missionária */}
           <div className="bg-white p-8 rounded-2xl shadow-xl shadow-orange-900/5 hover:-translate-y-2 transition-all duration-300 border-t-4 border-parish-gold relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-orange-100 text-parish-gold rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <Globe size={28} />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-3 text-parish-dark">Missionária</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Sustenta a evangelização: formação de catequistas, encontros de jovens, retiros e a expansão do Reino de Deus em nossa comunidade.
                </p>
              </div>
           </div>

           {/* Card Social */}
           <div className="bg-white p-8 rounded-2xl shadow-xl shadow-green-900/5 hover:-translate-y-2 transition-all duration-300 border-t-4 border-green-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <Users size={28} />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-3 text-parish-dark">Social</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Amor em atos concretos: auxilia os irmãos mais necessitados através dos Vicentinos, cestas básicas e obras de caridade da paróquia.
                </p>
              </div>
           </div>

        </div>

        {/* --- ÁREA UNIFICADA (Bloco Escuro no Fundo) --- */}
        <div className="bg-parish-dark rounded-[2.5rem] shadow-2xl overflow-hidden relative">
            
            {/* Decoração de fundo */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-parish-gold via-parish-dark to-parish-dark"></div>
            
            <div className="relative z-10 grid md:grid-cols-2">
                
                {/* ESQUERDA: Formulário */}
                <div className="p-8 md:p-16 bg-white md:rounded-r-[2.5rem] relative">
                    <div className="mb-8">
                       <span className="text-parish-terracotta font-bold text-xs uppercase tracking-widest mb-2 block">Participe Agora</span>
                       <h2 className="text-3xl font-serif font-bold text-parish-dark flex items-center gap-3">
                         <HeartHandshake className="text-parish-gold" size={32} />
                         Novo Cadastro
                       </h2>
                       <p className="text-gray-500 mt-4">
                         Preencha seus dados para receber o envelope/carnê e ser visitado pela pastoral.
                       </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Nome Completo</label>
                            <input 
                              required
                              value={form.nome}
                              onChange={(e) => setForm({...form, nome: e.target.value})}
                              className="w-full px-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:border-parish-gold focus:ring-1 focus:ring-parish-gold transition-all outline-none"
                              placeholder="Digite seu nome..."
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">WhatsApp</label>
                            <input 
                              required
                              value={form.telefone}
                              onChange={(e) => setForm({...form, telefone: e.target.value})}
                              className="w-full px-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:border-parish-gold focus:ring-1 focus:ring-parish-gold transition-all outline-none"
                              placeholder="(11) 99999-9999"
                            />
                        </div>
                        <button 
                           disabled={loading}
                           className="w-full bg-parish-dark text-parish-light font-bold py-4 rounded-xl hover:bg-black transition-all shadow-lg transform active:scale-[0.98] disabled:opacity-70 mt-4 flex justify-center items-center gap-2"
                        >
                          {loading ? "Enviando..." : "Quero Ser Dizimista"} <Check size={20}/>
                        </button>
                    </form>
                </div>

                {/* DIREITA: PIX Digital */}
                <div className="p-10 md:p-16 text-parish-light flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-white/10 rounded-xl text-parish-gold">
                             <QrCode size={32}/>
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-white">Contribuição Digital</h2>
                            <p className="text-white/60 text-sm">Faça sua oferta via PIX</p>
                        </div>
                    </div>
                    
                    {/* Cartão do QR Code */}
                    <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-sm mx-auto w-full mb-8 relative group">
                        <QrCode size={180} className="text-parish-dark mx-auto mix-blend-multiply opacity-90"/>
                        <p className="text-[10px] font-bold text-gray-400 mt-4 uppercase tracking-widest">Escaneie o QR Code</p>
                    </div>

                    <div className="space-y-2">
                       <p className="text-xs font-bold text-parish-gold uppercase tracking-wider mb-1 opacity-80">Chave PIX (CNPJ)</p>
                       <button 
                         onClick={handleCopy}
                         className="w-full bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl p-4 flex items-center justify-between group transition-all"
                       >
                          <span className="font-mono text-xl md:text-2xl font-bold text-white tracking-wider truncate">00.000.000/0001-00</span>
                          {copied ? <Check className="text-green-400" /> : <Copy className="text-white/50 group-hover:text-white" />}
                       </button>
                       <p className="text-xs text-white/40 text-center mt-2 h-4">{copied ? "Chave copiada!" : "Clique para copiar"}</p>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm opacity-60">
                        <p>Favorecido: <strong className="text-white">Paróquia São Miguel Arcanjo</strong></p>
                        <p className="text-xs mt-1">Mitra Arquidiocesana de São Paulo</p>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </div>
  );
};

export default Dizimo;