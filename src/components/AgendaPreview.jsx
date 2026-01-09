import React from 'react';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { eventosDB } from '../data/eventos'; 

const AgendaPreview = () => {
  const hoje = new Date(2025, 0, 1); 
  
  const proximosEventos = eventosDB
    .filter(evt => new Date(evt.data + 'T12:00:00') >= hoje)
    .sort((a, b) => new Date(a.data) - new Date(b.data))
    .slice(0, 3);

  const getDiaMes = (dataString) => {
    const data = new Date(dataString + 'T12:00:00');
    const dia = data.getDate().toString().padStart(2, '0');
    // Mês abreviado, ex: JAN
    const mes = data.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', ''); 
    return { dia, mes };
  };

  return (
    <section id="agenda" className="px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Título Principal - FONTE NOVA (Serifada e Itálica no destaque) */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
              <span className="block text-parish-terracotta font-bold tracking-[0.2em] text-xs uppercase mb-2">Programação 2025</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-parish-dark">
                Agenda <span className="italic text-parish-brown">Paroquial</span>
              </h2>
           </div>
           
           <Link to="/agenda" className="hidden md:flex items-center gap-2 text-parish-terracotta font-bold border-b border-parish-terracotta/30 hover:border-parish-terracotta transition-all pb-1 text-xs uppercase tracking-widest mt-6 md:mt-0">
              Ver calendário completo <ArrowRight size={16}/>
           </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* COLUNA 1: CARD DE HORÁRIOS (Visual Escuro Mantido, apenas ajustes finos) */}
          <div className="lg:col-span-1 bg-parish-dark text-white rounded-t-2xl rounded-bl-2xl rounded-br-[4rem] p-8 relative overflow-hidden shadow-2xl flex flex-col justify-between min-h-[420px]">
            {/* Efeito de vidro no fundo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div>
              <div className="relative z-10 flex items-center gap-4 mb-10">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-parish-gold border border-white/5 shadow-inner">
                  <Clock size={32} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-parish-gold mb-1">Fixos da Semana</span>
                  <h3 className="text-3xl font-serif font-medium leading-none">Santas Missas</h3>
                </div>
              </div>

              <div className="space-y-8 relative z-10">
                <div className="group">
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-serif text-xl tracking-wide">Terça-feira</span>
                      <span className="text-parish-gold font-mono text-xl">19:30</span>
                    </div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>
                
                <div className="group">
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-serif text-xl tracking-wide">Quinta <span className="text-xs font-sans opacity-60 ml-1 uppercase tracking-wide">Adoração</span></span>
                      <span className="text-parish-gold font-mono text-xl">19:00</span>
                    </div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>

                <div className="group">
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-serif text-xl tracking-wide">Sexta-feira</span>
                      <span className="text-parish-gold font-mono text-xl">15:00</span>
                    </div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>
              </div>
            </div>
            
            {/* Box Domingo */}
            <div className="relative mt-8">
                <div className="absolute inset-0 bg-parish-gold blur-lg opacity-20"></div>
                <div className="relative bg-parish-gold text-parish-dark p-5 rounded-2xl">
                    <span className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-center border-b border-black/10 pb-2">Domingo (Dia do Senhor)</span>
                    <div className="flex justify-center gap-6 text-2xl font-bold font-serif">
                    <span>08:00</span>
                    <span className="opacity-30 font-light">|</span>
                    <span>19:00</span>
                    </div>
                </div>
            </div>
          </div>

          {/* COLUNA 2 e 3: LISTA DE EVENTOS (Estilo TIMELINE) */}
          <div className="lg:col-span-2 relative pl-4 sm:pl-0">
             
             {/* Linha vertical conectando os cards (efeito timeline) */}
             <div className="hidden sm:block absolute left-[3.2rem] top-6 bottom-6 w-[2px] bg-parish-terracotta/20 rounded-full"></div>

             <div className="flex flex-col gap-6">
                {proximosEventos.length > 0 ? proximosEventos.map((evt, index) => {
                    const { dia, mes } = getDiaMes(evt.data);
                    
                    return (
                    <Link to="/agenda" key={index} className="relative group flex flex-col sm:flex-row items-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 z-10">
                        
                        {/* Data (Circular e Serifada) */}
                        <div className="flex-shrink-0 mb-4 sm:mb-0 mr-0 sm:mr-8 bg-parish-light/30 border border-parish-light w-20 h-20 rounded-2xl flex flex-col items-center justify-center text-parish-dark group-hover:bg-parish-terracotta group-hover:text-white group-hover:border-parish-terracotta transition-colors shadow-inner">
                            <span className="text-3xl font-serif font-bold leading-none">{dia}</span>
                            <span className="text-[10px] font-sans font-bold uppercase tracking-widest mt-1">{mes}</span>
                        </div>

                        {/* Detalhes */}
                        <div className="flex-1 text-center sm:text-left w-full border-l-0 sm:border-l sm:border-gray-100 sm:pl-8 border-dashed">
                            {/* Tag se tiver */}
                            {evt.tipo === 'festa' && <span className="inline-block px-2 py-0.5 mb-2 text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 rounded">Solenidade</span>}
                            
                            {/* Titulo Maior e Serifado */}
                            <h4 className="text-xl font-serif font-bold text-parish-dark mb-2 group-hover:text-parish-terracotta transition-colors">
                                {evt.titulo}
                            </h4>
                            
                            <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-xs font-medium text-gray-500 uppercase tracking-wide">
                                {evt.hora && <span className="flex items-center gap-1.5"><Clock size={14} className="text-parish-gold"/> {evt.hora}</span>}
                                {evt.local && <span className="flex items-center gap-1.5"><MapPin size={14} className="text-parish-gold"/> {evt.local}</span>}
                            </div>
                        </div>

                        {/* Botão Seta com Círculo */}
                        <div className="hidden sm:flex w-10 h-10 rounded-full border border-gray-100 items-center justify-center text-gray-300 group-hover:border-parish-terracotta group-hover:text-parish-terracotta group-hover:bg-red-50 transition-all">
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                    )
                }) : (
                    <div className="bg-white p-12 rounded-2xl text-center border border-dashed border-gray-300 opacity-60">
                        <p>Nenhum evento em destaque.</p>
                    </div>
                )}
             </div>

             <Link to="/agenda" className="md:hidden mt-6 block w-full text-center text-parish-terracotta font-bold text-xs uppercase tracking-widest border border-parish-terracotta/30 py-3 rounded-lg hover:bg-parish-terracotta hover:text-white transition-colors">
               Ver Agenda Completa
             </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgendaPreview;