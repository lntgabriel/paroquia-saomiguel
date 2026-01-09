import React from 'react';
import { Users, BookOpen, MapPin, ArrowRight } from 'lucide-react';
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
    // Mudei para max-w-5xl (estava 7xl). Isso centraliza e afasta das bordas (do santo)
    <section className="relative -mt-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <Link 
              to={card.to}
              key={index}
              onClick={() => window.scrollTo(0, 0)}
              className={`group relative bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${card.accent}`}
            >
              <div className={`mb-6 p-5 rounded-full ${card.colorIcon} transition-all duration-500 group-hover:scale-110`}>
                {card.icon}
              </div>

              <h3 className="text-2xl font-serif font-bold text-parish-dark mb-3">
                {card.title}
              </h3>
              
              <p className="text-gray-500 font-medium mb-8 leading-relaxed max-w-xs">
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