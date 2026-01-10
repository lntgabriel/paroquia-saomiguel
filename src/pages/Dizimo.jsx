import React, { useState } from 'react';
import { Heart, QrCode, Copy, Check, Building, Globe, Users, ArrowRight } from 'lucide-react';

const Dizimo = () => {
  const [copied, setCopied] = useState(false);

  // Copiar chave PIX
  const handleCopy = () => {
    navigator.clipboard.writeText("00.000.000/0001-00");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f4f1ea] pt-32 pb-20 relative overflow-hidden">
      
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/40 rounded-full blur-3xl pointer-events-none -mt-40 -mr-20"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* --- CABEÇALHO --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-parish-terracotta/10 text-parish-terracotta px-4 py-1.5 rounded-full mb-4">
             <Heart size={16} />
             <span className="text-xs font-bold uppercase tracking-widest">Oferta e Gratidão</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-parish-dark mb-4">
            Faça sua Doação
          </h1>
          <div className="max-w-2xl mx-auto">
             <div className="h-1 w-20 bg-parish-gold mx-auto mb-6 rounded-full"></div>
             <p className="text-lg text-parish-brown italic font-serif leading-relaxed">
               "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria." (2 Cor 9, 7)
             </p>
          </div>
        </div>

        {/* --- OS 3 MOTIVOS (MANTIDO PORQUE GERA CREDIBILIDADE) --- */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
           
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building size={24} />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2 text-parish-dark">Manutenção</h3>
                <p className="text-gray-500 text-xs leading-relaxed">Cuida do templo, luz, água e funcionários.</p>
           </div>

           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-orange-50 text-parish-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe size={24} />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2 text-parish-dark">Evangelização</h3>
                <p className="text-gray-500 text-xs leading-relaxed">Sustenta catequese, comunicação e eventos.</p>
           </div>

           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users size={24} />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2 text-parish-dark">Social</h3>
                <p className="text-gray-500 text-xs leading-relaxed">Ajuda aos irmãos carentes assistidos.</p>
           </div>

        </div>

        {/* --- ÁREA DO PIX (SUPER DESTAQUE CENTRALIZADO) --- */}
        <div className="max-w-2xl mx-auto bg-parish-dark rounded-3xl shadow-2xl overflow-hidden relative">
            
            {/* Decoração */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-parish-gold via-parish-dark to-parish-dark"></div>
            
            <div className="relative z-10 p-8 md:p-12 text-center text-white">
                <div className="flex justify-center mb-6">
                    <div className="p-3 bg-white/10 rounded-full">
                        <QrCode size={40} className="text-parish-gold"/>
                    </div>
                </div>

                <h2 className="text-3xl font-serif font-bold mb-2">Contribuição Digital</h2>
                <p className="text-white/60 text-sm mb-8">Faça sua oferta segura via PIX</p>

                {/* Bloco Branco do QR Code */}
                <div className="bg-white text-parish-dark p-6 rounded-2xl inline-block shadow-lg mb-8 group">
                    <QrCode size={180} className="mx-auto mix-blend-multiply opacity-90"/>
                    <p className="text-[10px] font-bold text-gray-400 mt-3 uppercase tracking-widest group-hover:text-parish-terracotta transition-colors">
                        Leia no app do banco
                    </p>
                </div>

                {/* Copiar e Colar */}
                <div className="space-y-3 max-w-sm mx-auto">
                    <p className="text-xs font-bold text-parish-gold uppercase tracking-widest opacity-80">
                        Chave PIX (CNPJ)
                    </p>
                    <button 
                        onClick={handleCopy}
                        className="w-full bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl p-4 flex items-center justify-between group transition-all backdrop-blur-md"
                    >
                        <span className="font-mono text-xl font-bold tracking-wider truncate">00.000.000/0001-00</span>
                        {copied ? <Check className="text-green-400" /> : <Copy className="text-white/70 group-hover:text-white" />}
                    </button>
                    <p className="text-xs h-4 font-medium transition-colors" style={{color: copied ? '#4ade80' : '#ffffff60'}}>
                        {copied ? "Chave copiada com sucesso!" : "Clique para copiar"}
                    </p>
                </div>

                {/* Rodapé do Cartão */}
                <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-white/50">
                    <div className="text-center md:text-left">
                        <span className="block font-bold text-white mb-1">Dados Bancários</span>
                        Bradesco (237) <br/>
                        Ag: 0000 | CC: 00000-0
                    </div>
                    <div className="text-center md:text-right">
                        <span className="block font-bold text-white mb-1">Favorecido</span>
                        Paróquia São Miguel Arcanjo <br/>
                        CNPJ: 00.000.000/0001-00
                    </div>
                </div>

            </div>
        </div>

        {/* Botão de Enviar Comprovante (Opcional, leva pro contato) */}
        <div className="text-center mt-12">
            <a 
                href={`https://wa.me/551122537499?text=Ola, gostaria de enviar o comprovante de uma doação.`}
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-parish-terracotta hover:text-parish-dark font-bold text-sm uppercase tracking-wide border-b border-parish-terracotta/30 hover:border-parish-dark pb-1 transition-all"
            >
                Enviar Comprovante <ArrowRight size={16}/>
            </a>
        </div>

      </div>
    </div>
  );
};

export default Dizimo;