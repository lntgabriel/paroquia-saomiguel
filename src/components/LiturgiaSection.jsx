import React, { useState, useEffect } from 'react';
import { BookOpen, Calendar, Loader, ExternalLink } from 'lucide-react';

const LiturgiaSection = () => {
  const [liturgia, setLiturgia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [abaAtiva, setAbaAtiva] = useState('primeiraLeitura');

  useEffect(() => {
    const fetchLiturgia = async () => {
      try {
        // Tenta pegar os dados via Proxy para evitar CORS
        // Usamos uma API diferente de Proxy (corsproxy.io) que costuma ser mais rápida
        const urlAlvo = 'https://liturgiadiaria.site/api/v1/today';
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(urlAlvo)}`;
        
        const response = await fetch(proxyUrl);
        
        if (!response.ok) throw new Error("Erro na rede");
        
        const dataWrapper = await response.json();
        // O allorigins devolve o texto dentro de 'contents', precisamos converter
        const data = JSON.parse(dataWrapper.contents);

        setLiturgia(data);
        setLoading(false);
      } catch (err) {
        console.error("Liturgia indisponível:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchLiturgia();
  }, []);

  const dataHoje = new Date().toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // SEÇÃO DE CARREGAMENTO
  if (loading) {
    return (
      <div className="py-20 bg-gray-50 flex flex-col items-center justify-center border-t border-gray-200">
        <Loader className="animate-spin text-parish-gold mb-3" size={30} />
        <p className="text-gray-400 font-medium">Buscando as leituras de hoje...</p>
      </div>
    );
  }

  // SE DER ERRO (BACKUP VISUAL)
  if (error || !liturgia) {
    return (
      <section className="py-16 bg-white border-t border-gray-200">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-parish-dark mb-4">
              Liturgia Diária: {dataHoje}
            </h2>
            
            <div className="bg-orange-50 rounded-xl p-8 border border-orange-100 shadow-sm max-w-2xl mx-auto">
               <BookOpen size={48} className="text-parish-terracotta mx-auto mb-4 opacity-50"/>
               <p className="text-gray-600 mb-6">
                 No momento não conseguimos carregar o texto bíblico automaticamente aqui no site.
                 Mas você não vai ficar sem a Palavra de Deus!
               </p>
               <a 
                 href="https://liturgia.cancaonova.com/pb/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-parish-dark text-white px-6 py-3 rounded-full font-bold hover:bg-parish-gold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
               >
                 Ler liturgia no site Canção Nova <ExternalLink size={18}/>
               </a>
            </div>
         </div>
      </section>
    );
  }

  // SE DER CERTO (EXIBIÇÃO NORMAL)
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Topo com Data */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-parish-gold bg-parish-light/30 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-3">
             <Calendar size={16} />
             <span>Liturgia Diária</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-parish-dark capitalize">
            {dataHoje}
          </h2>
          <p className="mt-2 text-gray-500 italic flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-parish-terracotta"></span>
            Cor Litúrgica: {liturgia.cor || "Do tempo"}
          </p>
        </div>

        {/* Card Principal */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          
          {/* Menu de Abas */}
          <div className="flex border-b border-gray-100 overflow-x-auto scrollbar-hide bg-gray-50">
            {[
              { id: 'primeiraLeitura', label: '1ª Leitura' },
              { id: 'salmo', label: 'Salmo' },
              { id: 'segundaLeitura', label: '2ª Leitura' },
              { id: 'evangelho', label: 'Evangelho' }
            ].map((aba) => (
              liturgia[aba.id] && (
                <button
                  key={aba.id}
                  onClick={() => setAbaAtiva(aba.id)}
                  className={`flex-1 px-4 py-4 text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap outline-none
                    ${abaAtiva === aba.id 
                      ? 'bg-white text-parish-terracotta border-t-4 border-t-parish-terracotta' 
                      : 'text-gray-400 hover:text-parish-dark bg-gray-50'
                    }`}
                >
                  {aba.label}
                </button>
              )
            ))}
          </div>

          {/* Área de Texto */}
          <div className="p-8 md:p-12 min-h-[300px]">
            {liturgia[abaAtiva] ? (
              <div className="animate-[fadeIn_0.5s_ease-out]">
                <h3 className="text-xl font-bold text-parish-brown mb-2 font-serif">
                   {liturgia[abaAtiva].referencia}
                </h3>
                
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8 border-b border-gray-100 pb-4">
                  {liturgia[abaAtiva].titulo}
                </h4>

                <div className="text-gray-700 leading-loose text-lg font-serif text-justify space-y-4">
                   {/* Renderização segura do texto */}
                   {typeof liturgia[abaAtiva].texto === 'string' 
                     ? liturgia[abaAtiva].texto.split('\n').map((paragrafo, idx) => (
                         paragrafo && <p key={idx}>{paragrafo}</p>
                       ))
                     : <p>Texto disponível no botão abaixo.</p>
                   }
                </div>

                <div className="mt-10 pt-6 border-t border-gray-100 text-center">
                   <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-2">
                     — {abaAtiva === 'evangelho' ? 'Palavra da Salvação' : 'Palavra do Senhor'}
                   </p>
                   <p className="text-parish-gold text-lg font-serif italic">
                     {abaAtiva === 'evangelho' ? 'Glória a Vós, Senhor!' : 'Graças a Deus!'}
                   </p>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-400 py-10">Carregando leitura...</div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LiturgiaSection;