import React from 'react';
import { Users, BookOpen, MapPin, ArrowRight, MousePointerClick } from 'lucide-react';
import { Link } from 'react-router-dom';

const CardsLinks = () => {
  const cards = [
    {
      title: "Comunidades",
      description: "Conheça nossas capelas.",
      icon: <MapPin size={28} />, 
      to: "/comunidades", 
      colorIcon: "bg-blue-50 text-blue-600",
      accent: "hover:border-blue-200"
    },
    {
      title: "Pastorais",
      description: "Sirva a Deus conosco.",
      icon: <Users size={28} />,
      to: "/pastorais", 
      colorIcon: "bg-orange-50 text-orange-600",
      accent: "hover:border-orange-200"
    },
    {
      title: "Sacramentos",
      description: "Guia completo da fé.",
      icon: <BookOpen size={28} />,
      to: "/sacramentos", 
      colorIcon: "bg-red-50 text-red-600",
      accent: "hover:border-red-200"
    }
  ];

  return (
    // AJUSTE AQUI: -mt-12 no mobile (menos invasivo), -mt-24 no desktop
    <section className="relative z-20 -mt-12 md:-mt-24">
      <div className="max-w-5xl mx-auto">
        
        {/* Dica visual só pro mobile */}
        <div className="md:hidden text-center mb-3 flex justify-center items-center gap-2 opacity-80">
            <span className="text-[10px] text-white/80 font-bold uppercase tracking-widest bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
               <MousePointerClick size={14} className="rotate-90" /> Deslize os cards
            </span>
        </div>

        <div className="
            flex md:grid md:grid-cols-3 
            gap-4 md:gap-8 
            overflow-x-auto md:overflow-visible 
            snap-x snap-mandatory 
            px-4 sm:px-6 pb-4
            scrollbar-hide
        ">
          {cards.map((card, index) => (
            <Link 
              to={card.to}
              key={index}
              onClick={() => window.scrollTo(0, 0)}
              className={`
                 snap-center shrink-0 w-[85vw] md:w-auto 
                 group relative bg-white rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 transform border border-gray-100 ${card.accent}
              `}
            >
              <div className={`mb-4 md:mb-6 p-4 md:p-5 rounded-full ${card.colorIcon} transition-all duration-500 group-hover:scale-110`}>
                {card.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-serif font-bold text-parish-dark mb-2 md:mb-3">
                {card.title}
              </h3>
              
              <p className="text-gray-500 font-medium mb-6 md:mb-8 leading-relaxed max-w-xs text-sm md:text-base">
                {card.description}
              </p>

              <div className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-parish-terracotta border-b-2 border-transparent group-hover:border-parish-terracotta pb-1 transition-all">
                Saiba Mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsLinks;