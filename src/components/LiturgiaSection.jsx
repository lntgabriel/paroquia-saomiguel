import React from 'react';
import { BookOpen, Calendar, ExternalLink, Bookmark } from 'lucide-react';
import { liturgiaDB } from '../data/liturgia'; // <--- Importando seu banco

const LiturgiaSection = () => {
  // Pega data de hoje
  const hoje = new Date();
  
  // Formata para comparar com o banco (YYYY-MM-DD)
  // Ajuste do fuso horário para garantir que pegue o dia certo no Brasil
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, '0');
  const dia = String(hoje.getDate()).padStart(2, '0');
  const dataFormatada = `${ano}-${mes}-${dia}`;

  // Formata para exibir bonito (10 de Janeiro...)
  const dataTexto = hoje.toLocaleDateString('pt-BR', { 
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' 
  });

  // Busca no seu banco
  const liturgiaHoje = liturgiaDB.find(item => item.data === dataFormatada);

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Card Principal */}
        <div className="bg-[#faf7f5] rounded-3xl p-8 md:p-10 border border-[#e8e2d2] shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
           
           {/* Efeito de luz */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-60 -mr-10 -mt-10 pointer-events-none"></div>

           {/* ESQUERDA: Informações do Dia */}
           <div className="flex-1 text-center md:text-left z-10">
              
              <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-parish-brown shadow-sm border border-gray-100 mb-4">
                 <Calendar size={14} /> 
                 <span className="capitalize">{dataTexto}</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-parish-dark mb-2">
                {liturgiaHoje ? "Liturgia da Palavra" : "Liturgia Diária"}
              </h2>
              
              {/* Mostra nome do Santo ou do Dia Litúrgico se tiver no banco */}
              <p className="text-parish-gold font-serif italic text-lg mb-6">
                {liturgiaHoje ? liturgiaHoje.dia : "Tempo Comum"}
              </p>

              {/* Versículo Destaque (Se tiver no banco) */}
              {liturgiaHoje && (
                  <div className="bg-white/60 p-4 rounded-xl border-l-4 border-parish-terracotta italic text-gray-600 mb-6 text-sm md:text-base">
                    "{liturgiaHoje.frase}"
                  </div>
              )}

              {/* Botão para Ler Completo */}
              <a 
                href="https://liturgia.cancaonova.com/pb/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 text-sm font-bold text-parish-terracotta border-b-2 border-parish-terracotta/20 hover:border-parish-terracotta pb-1 transition-all uppercase tracking-wide"
              >
                Ler leituras completas <ExternalLink size={14}/>
              </a>
           </div>

           {/* DIREITA: As Referências (O "Menu" do que ler) */}
           {liturgiaHoje ? (
               <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-full md:w-auto md:min-w-[320px] relative z-10">
                  <div className="space-y-4">
                      
                      <div className="flex items-center justify-between pb-3 border-b border-dashed border-gray-200">
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">1ª Leitura</span>
                          <span className="text-lg font-serif font-bold text-parish-dark">{liturgiaHoje.leitura1}</span>
                      </div>

                      {liturgiaHoje.leitura2 && (
                          <div className="flex items-center justify-between pb-3 border-b border-dashed border-gray-200">
                              <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">2ª Leitura</span>
                              <span className="text-lg font-serif font-bold text-parish-dark">{liturgiaHoje.leitura2}</span>
                          </div>
                      )}

                      <div className="flex items-center justify-between pb-3 border-b border-dashed border-gray-200">
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Salmo</span>
                          <span className="text-lg font-serif font-bold text-parish-dark">{liturgiaHoje.salmo}</span>
                      </div>

                      <div className="bg-parish-gold/10 p-3 rounded-lg flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                             <BookOpen size={18} className="text-parish-terracotta"/>
                             <span className="text-xs font-bold text-parish-terracotta uppercase tracking-wide">Evangelho</span>
                          </div>
                          <span className="text-xl font-serif font-bold text-parish-dark">{liturgiaHoje.evangelho}</span>
                      </div>

                  </div>
               </div>
           ) : (
               /* CASO NÃO TENHA CADASTRADO NO BANCO (FALLBACK) */
               <div className="bg-white/80 p-8 rounded-2xl text-center border border-dashed border-gray-300 md:max-w-xs">
                   <p className="text-gray-400 text-sm mb-4">Referências bíblicas não cadastradas para hoje no site.</p>
                   <span className="text-xs font-bold uppercase tracking-widest text-parish-gold">Consulte a fonte oficial</span>
               </div>
           )}

        </div>
      </div>
    </section>
  );
};

export default LiturgiaSection;