import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo-main.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Começa a mudar a cor logo que rola um pouquinho (20px)
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollLink = (e, targetId) => {
    if (!isHome) return; 
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const links = [
    { name: 'Início', path: '/', isScroll: true, target: '#inicio' },
    { name: 'A Paróquia', path: '/sobre', isScroll: false },
    { name: 'Sacramentos', path: '/sacramentos', isScroll: false },
    { name: 'Agenda', path: '/agenda', isScroll: false },
    { name: 'Doação', path: '/dizimo', isScroll: false }, // Nome mais direto
    { name: 'Contato', path: '/contato', isScroll: false },
  ];

  // Ajuste do background para ser mais visível e elegante
  const navBackground = (isHome && !scrolled) 
    ? 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'  // Maior no topo (py-6)
    : 'bg-parish-dark/95 backdrop-blur-md shadow-md py-3';                // Mais compacto ao rolar (py-3)

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* --- ÁREA DO LOGO (Aumentada) --- */}
          <Link 
            to="/" 
            className="flex-shrink-0 flex items-center cursor-pointer group" 
            onClick={() => window.scrollTo(0,0)}
          >
             <img 
               src={logo} 
               alt="Paróquia São Miguel" 
               // Mobile: h-12 (48px) | Desktop Topo: h-20 (80px) | Desktop Rolando: h-14 (56px)
               // transition-all suaviza quando o logo diminui ao rolar a página
               className={`w-auto object-contain transition-all duration-500
                 ${scrolled ? 'h-10 md:h-14' : 'h-14 md:h-20'}
                 filter drop-shadow-lg
               `}
               onError={(e) => {
                 e.target.style.display='none'; 
                 e.target.nextSibling.style.display='block';
               }}
             /> 
             {/* Texto de backup caso a imagem falhe */}
             <div className="hidden text-white ml-2 leading-tight">
                <span className="block font-serif text-lg font-bold">Paróquia</span>
                <span className="block text-xs uppercase tracking-widest text-parish-gold">São Miguel Arcanjo</span>
             </div>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {links.map((link) => {
              const shouldScroll = link.isScroll && isHome;
              return shouldScroll ? (
                <a 
                  key={link.name} 
                  href={link.target}
                  onClick={(e) => handleScrollLink(e, link.target)}
                  className="relative text-white/90 hover:text-parish-gold px-1 py-2 text-xs lg:text-sm font-bold uppercase tracking-widest transition-colors cursor-pointer group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-parish-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => window.scrollTo(0,0)}
                  className="relative text-white/90 hover:text-parish-gold px-1 py-2 text-xs lg:text-sm font-bold uppercase tracking-widest transition-colors group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-parish-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              );
            })}
          </div>

          {/* BOTÃO MENU MOBILE (Hambúrguer) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-white hover:text-parish-gold transition-colors focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* DROPDOWN MENU MOBILE (Preto total pra leitura) */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1510] border-t border-white/10 absolute w-full top-full left-0 shadow-2xl h-screen animate-slideDown">
          <div className="px-6 py-8 space-y-6 flex flex-col items-center">
            {links.map((link) => {
               const shouldScroll = link.isScroll && isHome;
               const ClassStyle = "text-xl font-serif text-white hover:text-parish-gold transition-colors block py-2";

               return shouldScroll ? (
                <a
                  key={link.name}
                  href={link.target}
                  onClick={(e) => { handleScrollLink(e, link.target); setIsOpen(false); }}
                  className={ClassStyle}
                >
                  {link.name}
                </a>
               ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => { setIsOpen(false); window.scrollTo(0,0); }}
                  className={ClassStyle}
                >
                  {link.name}
                </Link>
               );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;