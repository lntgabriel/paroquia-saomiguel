import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // pb-28 no mobile para não ficar escondido atrás da barra de navegação
    <footer className="bg-parish-dark text-gray-300 pt-16 pb-28 md:pb-10 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* COLUNA 1: Identidade */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white tracking-wide">
              Paróquia <br/>
              <span className="text-parish-gold">São Miguel Arcanjo</span>
            </h3>
            <p className="text-sm leading-relaxed opacity-80 max-w-xs">
              "Defendei-nos no combate". Sede nosso refúgio contra as maldades e ciladas do demônio.
            </p>
            
            {/* Redes Sociais */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-parish-terracotta hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* COLUNA 2: Links Rápidos */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 border-b border-white/10 pb-2 inline-block">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-parish-gold transition-colors flex items-center gap-2">Início</Link>
              </li>
              <li>
                <Link to="/agenda" onClick={scrollToTop} className="hover:text-parish-gold transition-colors flex items-center gap-2">Agenda & Horários</Link>
              </li>
              <li>
                <Link to="/sacramentos" onClick={scrollToTop} className="hover:text-parish-gold transition-colors flex items-center gap-2">Sacramentos</Link>
              </li>
              <li>
                <Link to="/Dizimo" onClick={scrollToTop} className="hover:text-parish-gold transition-colors flex items-center gap-2">Seja Dizimista</Link>
              </li>
              <li>
                <Link to="/admin" onClick={scrollToTop} className="hover:text-parish-gold transition-colors flex items-center gap-2 opacity-50 text-xs">Área Restrita</Link>
              </li>
            </ul>
          </div>

          {/* COLUNA 3: Contato Real */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 border-b border-white/10 pb-2 inline-block">Contato</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-parish-gold mt-1 shrink-0" size={18} />
                <p>
                  Travessa Pé de Manacá, 57 <br/>
                  Jardim da Conquista <br/>
                  São Paulo - SP, 08345-200
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="text-parish-gold shrink-0" size={18} />
                <p>(11) 2253-7499</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-parish-gold shrink-0" size={18} />
                <p>secretaria@paroquiaskm.com.br</p>
              </div>
            </div>
          </div>

        </div>

        {/* Rodapé do Rodapé */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} Paróquia São Miguel Arcanjo. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-6">
             <Link to="/privacidade" className="hover:text-white transition-colors">Termos de Uso</Link>
             <button onClick={scrollToTop} className="flex items-center gap-1 hover:text-white transition-colors">
                Voltar ao Topo <ArrowUp size={14}/>
             </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;