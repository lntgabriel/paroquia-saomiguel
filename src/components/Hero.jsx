import React from 'react';
import bgHero from '../assets/images/hero-bg.jpg'; 
import saoMiguel from '../assets/images/sao-miguel.png'; 
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div id="inicio" className="relative w-full h-[110vh] md:h-screen flex items-center overflow-hidden bg-parish-dark">
      
      {/* 1. FUNDO (Altar) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgHero})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div> 
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60"></div>
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-parish-dark to-transparent"></div>
      </div>

      {/* --- MUDANÇA AQUI: SÃO MIGUEL MAIS CENTRALIZADO --- */}
      <div className="absolute bottom-0 z-10 pointer-events-none
          /* MOBILE (Mantido igual estava, com filtro escuro) */
          w-full h-[70vh] left-0 opacity-100 mix-blend-normal brightness-[0.4]
          
          /* DESKTOP (AQUI MUDEI) */
          md:brightness-100 
          md:w-auto 
          md:h-[90vh] /* Ficou um pouco maior (era 85) */
          md:max-w-[50vw] 
          md:left-[8%] /* ERA left-0 ou -left. Agora é 8% da tela, traz ele pro meio. */
          2xl:left-[12%] /* Em telas gigantes, traz mais ainda pro meio */
      ">
         {/* Adicionei uma "luz" atrás dele só no PC pra ele não parecer colado chapado */}
         <div className="hidden md:block absolute bottom-0 left-10 w-full h-full bg-black/20 blur-2xl -z-10"></div>

         <img 
            src={saoMiguel} 
            alt="São Miguel Arcanjo" 
            className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
         />
      </div>

      {/* 3. CONTEÚDO DE TEXTO (Ajustado para direita para não bater no santo) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full h-full flex flex-col justify-center md:flex-row md:items-center md:justify-end">
        
        {/* lg:w-1/2 garante que o texto fique só na metade direita */}
        <div className="w-full md:w-[55%] lg:w-1/2 text-center md:text-right text-parish-white flex flex-col items-center md:items-end space-y-6 md:space-y-5 mt-10 md:mt-0 pb-32 md:pb-0 relative right-0 lg:right-4">
          
          <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
             <span className="text-parish-gold tracking-[0.2em] font-sans font-semibold uppercase text-[10px] md:text-xs">
               Paróquia São Miguel Arcanjo
             </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight drop-shadow-2xl text-white">
            Defendei-nos <br/> 
            <span className="text-parish-gold italic">no combate</span>
          </h1>
          
          <p className="max-w-xs md:max-w-lg text-gray-100 text-base md:text-xl font-medium drop-shadow-xl text-center md:text-right opacity-100 leading-relaxed">
            Sede nosso refúgio contra as maldades e ciladas do demônio.
          </p>

          <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 mt-8 px-4 sm:px-0">
             <button className="w-full sm:w-auto px-8 py-3 bg-parish-terracotta hover:bg-red-900 text-white font-bold tracking-wide rounded-full shadow-lg shadow-black/40 transition-all hover:-translate-y-1">
               Horários de Missa
             </button>
             
             <Link to="/dizimo" className="w-full sm:w-auto">
                <button className="w-full px-8 py-3 bg-black/40 border-2 border-white text-white hover:bg-white hover:text-parish-dark font-bold tracking-wide rounded-full shadow-lg backdrop-blur-sm transition-all hover:-translate-y-1">
                  Fazer meu Dízimo
                </button>
             </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;