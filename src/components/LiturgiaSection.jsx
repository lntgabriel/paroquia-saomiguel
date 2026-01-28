import React, { useState, useEffect } from 'react';
import { BookOpen, Calendar, ExternalLink, Loader, RefreshCw, ChevronRight } from 'lucide-react';

const LiturgiaSection = () => {
  const [liturgia, setLiturgia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [abaAtiva, setAbaAtiva] = useState('primeiraLeitura');

  // DATA DE HOJE
  const dataObj = new Date();
  const dataHoje = dataObj.toLocaleDateString('pt-BR', { 
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' 
  });

  const fetchLiturgia = async () => {
    setLoading(true);
    setError(false);
    
    const urlApi = 'https://liturgia.up.railway.app/';

    try {
      const response = await fetch(urlApi);
      if (!response.ok) throw new Error("Falha na conexão");
      
      const data = await response.json();
      if (!data || !data.evangelho) throw new Error("Dados incompletos");

      setLiturgia(data);
    } catch (err) {
      console.warn("API Liturgia falhou:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLiturgia();
  }, []);

  // --- RENDERIZAÇÃO: CARREGANDO ---
  if (loading) {
    return (
      <div className="py-16 bg-white flex flex-col items-center justify-center border-t border-gray-100 min-h-[300px]">
        <Loader className="animate-spin text-parish-gold mb-3" size={24} />
        <p className="text-gray-400 font-serif text-xs uppercase tracking-widest animate-pulse">Carregando Liturgia...</p>
      </div>
    );
  }

  // --- RENDERIZAÇÃO: MODO ERRO ---
  if (error || !liturgia) {
    return (
      <section className="py-12 bg-white border-t border-gray-100">
         <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="bg-[#faf7f5] rounded-2xl p-8 border border-[#ebe5de]">
               <BookOpen size={32} className="text-parish-terracotta mb-3 mx-auto"/>
               <h3 className="font-serif font-bold text-lg text-parish-dark mb-2">Liturgia Diária</h3>
               <p className="text-gray-500 mb-6 text-sm">Não foi possível carregar o texto aqui.</p>
               <div className="flex justify-center gap-3">
                 <button onClick={fetchLiturgia} className="px-4 py-2 border border-gray-300 rounded-lg text-xs font-bold text-gray-600 hover:bg-white flex items-center gap-2">
                    <RefreshCw size={14}/> Tentar
                 </button>
                 <a href="https://liturgia.cancaonova.com/pb/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-parish-terracotta text-white rounded-lg text-xs font-bold hover:bg-red-900 flex items-center gap-2">
                    Abrir Site <ExternalLink size={14}/>
                 </a>
               </div>
            </div>
         </div>
      </section>
    );
  }

  // --- RENDERIZAÇÃO: SUCESSO COMPACTO ---
  return (
    <section className="py-12 bg-[#fdfdfc] border-t border-gray-100">
      
      {/* Estilos inline para a barra de rolagem bonita */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d4c4a8; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #b09b75; }
      `}</style>

      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* LADO ESQUERDO: Título e Data (Fixo) */}
          <div className="md:w-1/3 md:sticky md:top-24 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-parish-gold bg-white border border-gray-100 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 shadow-sm">
               <Calendar size={12} /> <span className="capitalize">{dataHoje}</span>
            </div>
            
            <h2 className="text-2xl font-serif font-bold text-parish-dark leading-tight mb-2">
              Liturgia Diária
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Cor: <span className="font-semibold text-parish-brown capitalize">{liturgia.cor}</span>
            </p>

            {/* Menu de Abas Vertical (Desktop) ou Horizontal (Mobile) */}
            <div className="flex flex-wrap md:flex-col gap-2 mt-6">
              {['primeiraLeitura', 'salmo', 'segundaLeitura', 'evangelho'].map((aba) => (
                liturgia[aba] && (
                  <button
                    key={aba}
                    onClick={() => setAbaAtiva(aba)}
                    className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all text-left flex items-center justify-between group
                      ${abaAtiva === aba 
                        ? 'bg-parish-terracotta text-white shadow-md' 
                        : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-100 hover:border-gray-200'}`}
                  >
                    <span>
                      {aba === 'primeiraLeitura' ? '1ª Leitura' : aba === 'segundaLeitura' ? '2ª Leitura' : aba.charAt(0).toUpperCase() + aba.slice(1)}
                    </span>
                    {abaAtiva === aba && <ChevronRight size={14} className="hidden md:block"/>}
                  </button>
                )
              ))}
            </div>
          </div>

          {/* LADO DIREITO: O Texto (Card com Scroll) */}
          <div className="md:w-2/3 w-full">
            <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/40 border border-gray-100 overflow-hidden">
              
              {/* Header do Card */}
              <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/50 flex justify-between items-center">
                 <h3 className="font-serif font-bold text-lg text-gray-800 line-clamp-1">
                    {liturgia[abaAtiva]?.titulo || "Leitura"}
                 </h3>
                 {liturgia[abaAtiva]?.referencia && (
                   <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">
                     {liturgia[abaAtiva].referencia}
                   </span>
                 )}
              </div>

              {/* Área de Texto com Scroll Limitado */}
              <div className="h-[400px] overflow-y-auto custom-scrollbar p-6 md:p-8">
                 <div className="prose prose-stone max-w-none">
                    <p className="text-gray-600 leading-relaxed text-base font-serif text-justify whitespace-pre-wrap">
                       {liturgia[abaAtiva]?.texto}
                    </p>

                    {abaAtiva === 'evangelho' && (
                        <div className="mt-8 pt-6 border-t border-dashed border-gray-200 text-center">
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Palavra da Salvação</p>
                            <p className="text-parish-terracotta text-sm font-bold italic">Glória a Vós, Senhor!</p>
                        </div>
                    )}
                 </div>
              </div>

            </div>
            
            {/* Link Externo Discreto */}
            <div className="mt-3 text-right">
               <a href="https://liturgia.cancaonova.com/pb/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[10px] text-gray-400 hover:text-parish-terracotta transition-colors uppercase font-bold tracking-widest">
                  Ver completo na Canção Nova <ExternalLink size={10} />
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LiturgiaSection;