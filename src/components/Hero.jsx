import React from "react";
import bgHero from "../assets/images/hero-bg.jpg";
import saoMiguel from "../assets/images/sao-miguel.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      id="inicio"
      className="relative w-full h-screen flex items-center overflow-hidden bg-parish-dark"
    >
      {/* 1. FUNDO (Altar) - Continua igual */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgHero})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-parish-dark to-transparent"></div>
      </div>

      {/* 2. SÃO MIGUEL (O AJUSTE FINO) */}
      {/* 
         left-0: Encosta na esquerda (sem cortar, nem sobrar buraco).
         h-[85vh]: Ocupa 85% da altura (fica imponente, mas não bate no teto).
         max-w-[45vw]: Garante que ele nunca vai passar do meio da tela.
      */}
      <div className="hidden md:block absolute bottom-0 left-0 z-10 h-[85vh] w-auto max-w-[45vw]">
        <img
          src={saoMiguel}
          alt="São Miguel Arcanjo"
          className="h-full w-auto object-contain object-bottom drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
          style={{ pointerEvents: "none" }}
        />
        {/* Degrade na base pra ele não ficar "flutuando" se a imagem for cortada */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-parish-dark to-transparent"></div>
      </div>

      {/* Container Principal do Texto */}
      {/* justify-end: Empurra o bloco de texto lá pra direita */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full h-full flex flex-col md:flex-row items-center justify-end">
        {/* 3. TEXTO E BOTÕES */}
        {/* md:w-1/2: Ocupa a metade direita da tela.
            pr-0 lg:pr-12: Um espacinho na direita pra não grudar na borda em telas gigantes.
        */}
        <div className="w-full md:w-[55%] text-center md:text-right text-parish-white flex flex-col items-center md:items-end space-y-5 lg:pr-10 mt-20 md:mt-0">
          <div className="bg-black/40 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 shadow-lg">
            <span className="text-parish-gold tracking-[0.2em] font-sans font-semibold uppercase text-xs">
              Paróquia São Miguel Arcanjo
            </span>
          </div>

          {/* Tamanho equilibrado: Nem gigante, nem pequeno */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight drop-shadow-2xl">
            Defendei-nos <br />
            <span className="text-parish-gold italic">no combate</span>
          </h1>

          <p className="max-w-lg text-gray-100 text-lg md:text-xl font-medium drop-shadow-lg text-right opacity-90 leading-relaxed">
            Sede nosso refúgio contra as maldades e ciladas do demônio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="px-8 py-3 bg-parish-terracotta hover:bg-red-900 text-white font-bold tracking-wide rounded-full shadow-lg shadow-black/40 transition-all transform hover:-translate-y-1 hover:scale-105">
              Horários de Missa
            </button>
            <Link to="/dizimo">
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-parish-dark font-bold tracking-wide rounded-full shadow-lg transition-all transform hover:-translate-y-1 w-full md:w-auto">
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
