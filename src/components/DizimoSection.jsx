import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DizimoSection = () => {
  return (
    <section id="dizimo" className="py-20 bg-white relative overflow-hidden">
      
      {/* Container Principal */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloco de Chamada (Agora mais clean e convidativo) */}
        <div className="bg-[#faf7f5] rounded-3xl p-8 md:p-16 border border-[#e8e2d2] flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-parish-terracotta/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-parish-gold/5 rounded-full blur-3xl -ml-10 -mb-10"></div>

          {/* Lado Esquerdo: Texto */}
          <div className="w-full md:w-2/3 z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-100 rounded-full text-xs font-bold text-parish-terracotta uppercase tracking-wider mb-4 shadow-sm">
              <Heart size={14} fill="currentColor" />
              <span>Contribuição</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-parish-dark mb-4">
              Ajude-nos a evangelizar
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Sua oferta mantém nossa igreja de portas abertas, sustenta as obras sociais e leva a palavra de Deus mais longe. 
              <br className="hidden md:block"/>Toda doação, de qualquer valor, é bem-vinda.
            </p>
          </div>

          {/* Lado Direito: Ação */}
          <div className="w-full md:w-auto z-10 flex flex-col gap-4">
             <Link to="/dizimo" onClick={() => window.scrollTo(0,0)}>
               <button className="w-full md:w-auto px-8 py-4 bg-parish-dark text-white rounded-xl font-bold hover:bg-black transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group whitespace-nowrap">
                 Fazer uma Doação <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20}/>
               </button>
             </Link>
             
             <p className="text-xs text-gray-400 text-center md:text-right uppercase tracking-wider font-bold">
                Via PIX.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DizimoSection;