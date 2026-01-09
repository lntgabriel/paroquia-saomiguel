import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sacramentos from './pages/Sacramentos';
import Contato from './pages/Contato'; // IMPORT NOVO
import Sobre from './pages/Sobre'; // IMPORT NOVO
import { useEffect } from 'react';
import Admin from './pages/Admin'; // Importa a página nova
import Agenda from './pages/Agenda';
import Dizimo from './pages/Dizimo';


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans selection:bg-parish-gold selection:text-white">
        <Navbar />
        <ScrollToTop /> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sacramentos" element={<Sacramentos />} />
          <Route path="/contato" element={<Contato />} /> {/* ROTA NOVA */}
          <Route path="/sobre" element={<Sobre />} />     {/* ROTA NOVA */}
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/dizimo" element={<Dizimo />} />


          
          {/* Páginas temporárias caso o link de Pastorais seja clicado */}
          <Route path="/pastorais" element={<div className='pt-32 text-center text-2xl font-serif'>Em construção...</div>} />
          <Route path="/comunidades" element={<div className='pt-32 text-center text-2xl font-serif'>Em construção...</div>} />
        </Routes>

        <footer className="bg-parish-dark text-parish-light py-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
            <div>
              <h4 className="font-serif text-xl font-bold mb-2">Paróquia São Miguel Arcanjo</h4>
              <p className="text-sm opacity-60 max-w-xs">Defendei-nos no combate.</p>
            </div>
            
            <div className="text-sm opacity-60">
              <p>Rua da Matriz, 123 - Centro</p>
              <p>(11) 99999-9999</p>
              {/* Agora sim temos um link de contato no rodapé */}
              <a href="/contato" className="text-parish-gold hover:underline mt-2 block">Entre em contato</a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;