import React from 'react';
import bgHero from '../assets/images/hero-bg.jpg'; 
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react'; // Ícone para convidar a descer

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('agenda') || document.querySelector('.bg-\\[\\#faf7f5\\]');
    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="inicio" className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden bg-parish-dark">
      
      {/* 1. FUNDO (O Altar é o Protagonista) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-105"
        style={{ backgroundImage: `url(${bgHero})` }}
      >
        {/* Máscara escura centralizada para destacar o texto */}
        <div className="absolute inset-0 bg-black/50"></div> 
        
        {/* Gradiente radial para focar no centro */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)]"></div>
        
        {/* Degradê na base */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f4f1ea] to-transparent opacity-20"></div>
      </div>

      {/* 2. CONTEÚDO CENTRALIZADO */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 w-full flex flex-col items-center text-center">
        
        {/* Tagline Elegante */}
        <div className="mb-6 animate-[fadeInDown_1s_ease-out]">
           <span className="inline-block py-1 px-4 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm text-parish-gold tracking-[0.3em] font-sans font-semibold uppercase text-xs shadow-lg">
             Paróquia São Miguel Arcanjo
           </span>
        </div>

        {/* Título Impactante */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight drop-shadow-2xl text-white mb-6 animate-[fadeInUp_1s_ease-out_0.2s]">
          Defendei-nos <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-parish-gold via-yellow-200 to-parish-gold italic">no combate</span>
        </h1>
        
        {/* Subtítulo */}
        <p className="max-w-xl text-gray-200 text-lg md:text-2xl font-light drop-shadow-lg leading-relaxed mb-10 animate-[fadeInUp_1s_ease-out_0.4s]">
          Sede nosso refúgio contra as maldades <br className="hidden md:block"/> e ciladas do demônio.
        </p>

        {/* Botões */}
        <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-5 animate-[fadeInUp_1s_ease-out_0.6s]">
           <button className="px-8 py-4 bg-parish-terracotta hover:bg-red-900 text-white font-bold tracking-widest text-sm uppercase rounded-full shadow-2xl shadow-red-900/30 transition-all hover:scale-105 border border-transparent">
             Horários de Missa
           </button>
           
           <Link to="/dizimo">
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-parish-dark border border-white font-bold tracking-widest text-sm uppercase rounded-full shadow-2xl backdrop-blur-md transition-all hover:scale-105">
                Faça uma Doação
              </button>
           </Link>
        </div>

      </div>

      {/* Seta indicando rolagem (Scroll Indicator) */}
      <button 
        onClick={handleScroll}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce cursor-pointer z-30"
      >
        <ArrowDown size={32} />
      </button>

    </div>
  );
};

export default Hero;