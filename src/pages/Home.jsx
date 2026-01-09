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
      
      {/* Container dos Cards Flutuantes (fica por cima do corte) */}
      <div className="relative z-30"> 
         <CardsLinks />
      </div>

      {/* 
          AQUI ESTÁ A MUDANÇA DE COR DO FUNDO
          Mudei para bg-[#f4f1ea] (Um bege/cinza quente mais escuro).
          Isso cria uma "faixa" diferente na tela.
      */}
      <div className="bg-[#f4f1ea] pb-24 pt-24 -mt-12 relative z-10 border-t border-b border-[#e5e0d8]">
         {/* Adicionei uma "luz" decorativa no fundo pra tirar o aspecto seco */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none"></div>
         
         <AgendaPreview />
      </div>

      <LiturgiaSection />

      <DizimoSection />
    </div>
  );
};

export default Home;