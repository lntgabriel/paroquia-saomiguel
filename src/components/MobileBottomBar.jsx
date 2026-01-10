import React from 'react';
import { Home, Calendar, Heart, MessageCircle, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const MobileBottomBar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const items = [
    { icon: <Home size={20} />, label: "Início", path: "/" },
    { icon: <Calendar size={20} />, label: "Agenda", path: "/agenda" },
    { icon: <Heart size={24} />, label: "Dízimo", path: "/dizimo", isSpecial: true },
    { icon: <BookOpen size={20} />, label: "Fé", path: "/sacramentos" },
    { icon: <MessageCircle size={20} />, label: "Contato", path: "/contato" },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-[60]">
      
      {/* Sombra suave no topo da barra */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>

      <div className="relative bg-white border-t border-gray-200 pb-safe shadow-2xl">
        <div className="flex justify-between items-center h-16 px-4">
          {items.map((item, index) => {
            
            if (item.isSpecial) {
                return (
                    <Link key={index} to={item.path} onClick={() => window.scrollTo(0,0)} className="relative -top-5">
                        <div className="bg-parish-terracotta text-white p-3.5 rounded-full shadow-lg shadow-parish-terracotta/40 border-[3px] border-[#f4f1ea] transform active:scale-95 transition-transform">
                            {item.icon}
                        </div>
                    </Link>
                )
            }

            return (
              <Link 
                key={index} 
                to={item.path}
                onClick={() => window.scrollTo(0,0)}
                // MUDEI AQUI: de text-gray-400 para text-gray-500 (mais escuro)
                className={`flex flex-col items-center justify-center w-14 gap-1 ${isActive(item.path) ? 'text-parish-dark font-bold' : 'text-gray-500 font-medium'}`}
              >
                {item.icon}
                {/* Texto um pouco maior e mais escuro */}
                <span className={`text-[10px] uppercase tracking-wide ${isActive(item.path) ? 'opacity-100' : 'opacity-80'}`}>
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
      <div className="h-[env(safe-area-inset-bottom)] bg-white"></div>
    </div>
  );
};

export default MobileBottomBar;