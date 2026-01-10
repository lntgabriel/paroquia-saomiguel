import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo-main.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Verifica se estamos na página Home
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para lidar com clique no LOGO ou INICIO
  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Se não for home, o Link já resolve levando pra '/'
  };

  const handleScrollLink = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  // Configuração dos botões
  const links = [
    { name: 'Início', path: '/', isScroll: true, target: '#inicio' },
    { name: 'A Paróquia', path: '/sobre', isScroll: false },
    { name: 'Sacramentos', path: '/sacramentos', isScroll: false },
    { name: 'Agenda', path: '/agenda', isScroll: false }, // Já tínhamos mudado
    { name: 'Doação', path: '/dizimo', isScroll: false }, // <--- MUDANÇA AQUI (isScroll: false, path: '/dizimo')
    { name: 'Contato', path: '/contato', isScroll: false },
  ];

  // Estilo do fundo: Transparente na Home (topo), Escuro nas outras páginas ou ao rolar
  const navBackground = (isHome && !scrolled) 
    ? 'bg-gradient-to-b from-black/90 to-transparent' 
    : 'bg-parish-dark shadow-xl';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground} py-4`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          
          {/* LOGO */}
          <Link to="/" onClick={handleLogoClick} className="flex-shrink-0 flex items-center cursor-pointer">
             <img src={logo} alt="Paróquia São Miguel" className="h-10 md:h-12 w-auto object-contain mr-2 drop-shadow-md" 
                  onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block'}}/> 
             <span className="text-white font-serif text-lg font-bold hidden">Paróquia São Miguel</span>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => {
              // AQUI ESTÁ A CORREÇÃO:
              // Só usamos o link de rolar se for um item de scroll E estivermos na home
              const shouldScroll = link.isScroll && isHome;

              return shouldScroll ? (
                // É um botão de rolagem na Home
                <a 
                  key={link.name} 
                  href={link.target}
                  onClick={(e) => handleScrollLink(e, link.target)}
                  className="text-white/90 hover:text-parish-gold px-3 py-2 text-sm font-medium uppercase tracking-wider transition-all hover:-translate-y-0.5 cursor-pointer shadow-black drop-shadow-sm"
                >
                  {link.name}
                </a>
              ) : (
                // É um link para outra página (ou voltar para home de fora)
                <Link 
                  key={link.name} 
                  to={link.path}
                  // Se for voltar para home (path /) clicando em algo como agenda, rola pro topo
                  onClick={() => window.scrollTo(0,0)}
                  className="text-white/90 hover:text-parish-gold px-3 py-2 text-sm font-medium uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-black drop-shadow-sm"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* BOTÃO MOBILE */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-parish-gold transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="md:hidden bg-parish-dark/95 backdrop-blur-md absolute w-full top-full left-0 border-t border-white/10 shadow-2xl h-screen">
          <div className="px-4 py-8 space-y-4">
            {links.map((link) => {
               const shouldScroll = link.isScroll && isHome;

               return shouldScroll ? (
                <a
                  key={link.name}
                  href={link.target}
                  onClick={(e) => { handleScrollLink(e, link.target); setIsOpen(false); }}
                  className="text-gray-100 hover:text-parish-gold hover:bg-white/5 block px-3 py-4 rounded-lg text-lg font-bold uppercase tracking-wide border-b border-white/5"
                >
                  {link.name}
                </a>
               ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => { setIsOpen(false); window.scrollTo(0,0); }}
                  className="text-gray-100 hover:text-parish-gold hover:bg-white/5 block px-3 py-4 rounded-lg text-lg font-bold uppercase tracking-wide border-b border-white/5"
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