import React from 'react';
// Depois vc troca por foto do padre e da igreja
import churchImg from '../assets/images/hero-bg.jpg'; 
import priestImg from '../assets/images/logo-main.png'; // Provisório se não tiver foto dele

const Sobre = () => {
  return (
    <div className="bg-white min-h-screen pt-28">
      
      {/* Bloco 1: A Paróquia */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 relative">
           <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-parish-gold -mt-4 -ml-4"></div>
           <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-parish-gold -mb-4 -mr-4"></div>
           <img src={churchImg} alt="Igreja" className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover h-[500px]" />
        </div>
        
        <div className="order-1 md:order-2 space-y-6">
          <span className="text-parish-terracotta font-bold tracking-widest uppercase text-sm">Nossa História</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-parish-dark">
            Uma comunidade de <span className="text-parish-gold">fé e tradição</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed text-justify">
            Fundada em [ANO], a Paróquia São Miguel Arcanjo tem sido um farol de esperança em nossa região. 
            Começamos como uma pequena capela fruto da devoção dos primeiros moradores e hoje somos 
            uma grande família que acolhe a todos.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed text-justify">
            Nosso padroeiro, São Miguel, nos inspira a combater o bom combate da fé todos os dias, 
            buscando sempre a santidade e o serviço ao próximo através de nossas diversas pastorais 
            e movimentos.
          </p>
        </div>
      </section>

      {/* Bloco 2: O Pároco (Importante pro Padre) */}
      <section className="bg-parish-light/30 py-20 mt-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-serif font-bold text-parish-brown mb-12">Nosso Pároco</h2>
           
           <div className="bg-white p-8 rounded-xl shadow-lg border border-parish-beige max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 flex-shrink-0 bg-gray-200 rounded-full overflow-hidden border-4 border-parish-gold mx-auto">
                 {/* Aqui vai a foto do Padre 1x1 (quadrada) */}
                 <img src={priestImg} alt="Padre" className="w-full h-full object-cover" /> 
              </div>
              
              <div className="text-center md:text-left">
                 <h3 className="text-2xl font-bold text-parish-dark">Pe. [Nome do Padre]</h3>
                 <p className="text-parish-terracotta font-medium mb-4">Pároco desde 2024</p>
                 <p className="text-gray-600 italic">
                   "Queridos paroquianos, é uma alegria servir a Deus nesta comunidade. 
                   Que São Miguel Arcanjo proteja nossas famílias e nos guie no caminho do Senhor."
                 </p>
                 {/* Assinatura decorativa se quiser dps */}
              </div>
           </div>
        </div>
      </section>

      {/* Bloco 3: Frase Final */}
      <section className="bg-parish-dark text-white py-24 text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif italic font-light leading-relaxed opacity-90">
              "Quem como Deus? Ninguém como Deus!"
            </h2>
            <div className="w-20 h-1 bg-parish-gold mx-auto mt-8"></div>
         </div>
      </section>

    </div>
  );
};

export default Sobre;