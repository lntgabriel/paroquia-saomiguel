import React from 'react';
// Certifique-se que essas imagens existem. 
// Se não tiver historyBg, pode usar a hero-bg.jpg mesmo.
import historyBg from '../assets/images/hero-bg.jpg'; 
import priestImg from '../assets/images/logo-main.png'; // Foto do Pe. Ailton

const Sobre = () => {
  return (
    // ESTA DIV AQUI EMBAIXO É A "MÃE" DE TODAS. NÃO PODE TER NADA FORA DELA.
    <div className="min-h-screen bg-[#f4f1ea] pt-24 md:pt-32 pb-20 overflow-x-hidden">
      
      {/* --- SEÇÃO 1: HISTÓRIA (Estilo Clássico com Moldura) --- */}
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-16 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Lado Esquerdo: Foto com os Cantos Dourados que você curtiu */}
        <div className="order-2 md:order-1 relative px-4 md:px-0">
           {/* Cantoneira Superior Esquerda */}
           <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-parish-gold -mt-4 -ml-2 md:-ml-6 pointer-events-none"></div>
           {/* Cantoneira Inferior Direita */}
           <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-parish-gold -mb-4 -mr-2 md:-mr-6 pointer-events-none"></div>
           
           <div className="rounded-lg overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
             <img 
               src={historyBg} 
               alt="História da Paróquia" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
             />
           </div>
        </div>
        
        {/* Lado Direito: Texto */}
        <div className="order-1 md:order-2 space-y-6 text-center md:text-left">
          <span className="text-parish-terracotta font-bold tracking-widest uppercase text-xs">Nossa História</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-parish-dark leading-tight">
            Uma comunidade de <span className="text-parish-gold">fé e tradição</span>
          </h1>
          
          <div className="space-y-4 text-gray-600 text-sm md:text-lg leading-relaxed text-justify">
            <p>
              A <strong>Paróquia São Miguel Arcanjo</strong> foi fundada oficialmente em <strong>27 de junho de 2006</strong>. Nasceu do sonho e da fé das famílias desta região, que no início se reuniam em garagens para celebrar a Eucaristia.
            </p>
            <p>
              Hoje, pertencente à <strong>Região Episcopal Belém</strong> (Arquidiocese de São Paulo), somos uma grande família formada por 8 comunidades vivas e atuantes no Jardim da Conquista e arredores.
            </p>
            <p>
              Sob a espada e a proteção de São Miguel, "Quem como Deus?", seguimos nossa missão de evangelizar e acolher a todos.
            </p>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 2: O PÁROCO --- */}
      <section className="bg-white/60 py-20 mt-10 border-y border-white/50">
        <div className="max-w-5xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-serif font-bold text-parish-brown mb-12">Nosso Pároco</h2>
           
           <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-[#e5e0d8] max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
              {/* Foto do Padre */}
              <div className="w-48 h-48 flex-shrink-0 bg-gray-100 rounded-full overflow-hidden border-4 border-parish-gold mx-auto shadow-inner">
                 <img src={priestImg} alt="Pe. Ailton" className="w-full h-full object-cover" /> 
              </div>
              
              <div className="text-center md:text-left">
                 <h3 className="text-2xl font-bold text-parish-dark font-serif">Pe. Ailton Rodrigues Damasceno, MSC</h3>
                 <p className="text-parish-terracotta font-bold text-xs uppercase tracking-wide mb-4 bg-parish-terracotta/10 inline-block px-3 py-1 rounded-full">Pároco</p>
                 <p className="text-gray-600 italic leading-relaxed text-sm md:text-base">
                   "É uma alegria servir ao povo de Deus nesta terra de missão. Caminhamos juntos, em sinodalidade, buscando sempre o Reino de Deus."
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* --- SEÇÃO 3: FRASE FINAL --- */}
      <section className="bg-parish-dark text-white py-24 text-center mt-20 relative overflow-hidden">
         {/* Efeito de luz sutil no fundo */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
         
         <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif italic font-light leading-relaxed opacity-90">
              "Quem como Deus? Ninguém como Deus!"
            </h2>
            <div className="w-24 h-1 bg-parish-gold mx-auto mt-8 rounded-full"></div>
         </div>
      </section>

    </div> 
  );
};

export default Sobre;