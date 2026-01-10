import React from 'react';
import Hero from '../components/Hero';
import CardsLinks from '../components/CardsLinks';
import AgendaPreview from '../components/AgendaPreview';
import DizimoSection from '../components/DizimoSection';
import LiturgiaSection from '../components/LiturgiaSection'; 

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      
      {/* Cards flutuantes */}
      <div className="relative z-30"> 
         <CardsLinks />
      </div>

      {/* 
         MUDANÇA AQUI:
         Adicionei `overflow-hidden` para nada vazar nas laterais (evita barra de rolagem horizontal).
      */}
      <div className="bg-[#f4f1ea] pb-20 pt-24 -mt-12 relative z-10 border-t border-b border-[#e5e0d8] overflow-hidden">
         {/* Luz decorativa */}
         <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none"></div>
         
         <AgendaPreview />
      </div>

      <LiturgiaSection />

      {/* 
         MUDANÇA FINAL AQUI:
         No container pai do Dizimo, adicionei 'pb-32 md:pb-0'.
         Isso cria um espaço vazio extra no final SÓ NO CELULAR pra barra não tampar nada.
      */}
      <div className="pb-32 md:pb-0">
        <DizimoSection />
      </div>
    </div>
  );
};

export default Home;