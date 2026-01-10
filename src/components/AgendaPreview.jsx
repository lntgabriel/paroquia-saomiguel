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
    const mes = data.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', ''); 
    return { dia, mes };
  };

  return (
    <section id="agenda" className="px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* CORREÇÃO 1: CABEÇALHO CENTRALIZADO NO MOBILE */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-12 text-center md:text-left gap-4 md:gap-0">
           <div>
              <span className="block text-parish-terracotta font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-2">
                Programação 2025
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-parish-dark">
                Agenda <span className="italic text-parish-brown">Paroquial</span>
              </h2>
           </div>
           
           <Link to="/agenda" className="hidden md:flex items-center gap-2 text-parish-terracotta font-bold border-b border-parish-terracotta/30 hover:border-parish-terracotta transition-all pb-1 text-xs uppercase tracking-widest">
              Ver calendário completo <ArrowRight size={16}/>
           </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* CORREÇÃO 2: CARTÃO SIMÉTRICO NO MOBILE */}
          {/* Antes estava rounded-br-[4rem] sempre. Agora é rounded-2xl no mobile e volta a ser "tortinho estiloso" só no PC */}
          <div className="lg:col-span-1 bg-parish-dark text-white rounded-2xl md:rounded-bl-2xl md:rounded-br-[4rem] p-6 md:p-8 relative overflow-hidden shadow-2xl flex flex-col justify-between min-h-[380px] md:min-h-[420px]">
            
            {/* Decoração */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div>
              <div className="relative z-10 flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-parish-gold border border-white/5 shadow-inner shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-parish-gold mb-1 opacity-80">Fixos da Semana</span>
                  <h3 className="text-2xl md:text-3xl font-serif font-medium leading-none">Santas Missas</h3>
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="group">
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-serif text-lg md:text-xl tracking-wide">Terça-feira</span>
                      <span className="text-parish-gold font-mono text-lg md:text-xl">19:30</span>
                    </div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>
                
                <div className="group">
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-serif text-lg md:text-xl tracking-wide">Quinta <span className="text-[10px] md:text-xs font-sans opacity-60 ml-1 uppercase tracking-wide hidden sm:inline">Adoração</span></span>
                      <span className="text-parish-gold font-mono text-lg md:text-xl">19:00</span>
                    </div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>

                <div className="group">
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-serif text-lg md:text-xl tracking-wide">Sexta-feira</span>
                      <span className="text-parish-gold font-mono text-lg md:text-xl">15:00</span>
                    </div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>
              </div>
            </div>
            
            {/* Box Domingo */}
            <div className="relative mt-8">
                <div className="absolute inset-0 bg-parish-gold blur-lg opacity-20"></div>
                <div className="relative bg-parish-gold text-parish-dark p-4 md:p-5 rounded-2xl text-center">
                    <span className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-center border-b border-black/10 pb-2">Domingo (Dia do Senhor)</span>
                    <div className="flex justify-center gap-6 text-xl md:text-2xl font-bold font-serif">
                      <span>08:00</span>
                      <span className="opacity-30 font-light">|</span>
                      <span>19:00</span>
                    </div>
                </div>
            </div>
          </div>

          {/* LISTA DE EVENTOS */}
          <div className="lg:col-span-2 relative pl-4 sm:pl-0">
             
             {/* Timeline apenas no desktop */}
             <div className="hidden sm:block absolute left-[3.2rem] top-6 bottom-6 w-[2px] bg-parish-terracotta/20 rounded-full"></div>

             <div className="flex flex-col gap-4 md:gap-6">
                {proximosEventos.length > 0 ? proximosEventos.map((evt, index) => {
                    const { dia, mes } = getDiaMes(evt.data);
                    
                    return (
                    <Link to="/agenda" key={index} className="relative group flex flex-row items-center bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 z-10">
                        
                        {/* Data compacta no mobile, maior no desktop */}
                        <div className="flex-shrink-0 mr-4 md:mr-8 bg-parish-light/30 border border-parish-light w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex flex-col items-center justify-center text-parish-dark group-hover:bg-parish-terracotta group-hover:text-white group-hover:border-parish-terracotta transition-colors shadow-inner">
                            <span className="text-xl md:text-3xl font-serif font-bold leading-none">{dia}</span>
                            <span className="text-[10px] font-sans font-bold uppercase tracking-widest mt-1">{mes}</span>
                        </div>

                        {/* Detalhes */}
                        <div className="flex-1 w-full border-l-0 sm:border-l sm:border-gray-100 sm:pl-8 border-dashed min-w-0">
                            {/* Titulo Truncado se for muito grande */}
                            <h4 className="text-base md:text-xl font-serif font-bold text-parish-dark mb-1 md:mb-2 group-hover:text-parish-terracotta transition-colors leading-tight">
                                {evt.titulo}
                            </h4>
                            
                            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-gray-500 uppercase tracking-wide">
                                {evt.hora && <span className="flex items-center gap-1"><Clock size={12} className="text-parish-gold"/> {evt.hora}</span>}
                                {/* Esconde o local no mobile se for muito pequeno pra nao quebrar layout, ou trunca */}
                                {evt.local && <span className="hidden xs:flex items-center gap-1 truncate"><MapPin size={12} className="text-parish-gold"/> {evt.local}</span>}
                            </div>
                        </div>

                        {/* Seta some no mobile muito pequeno pra dar espaço pro texto */}
                        <div className="hidden sm:flex w-10 h-10 rounded-full border border-gray-100 items-center justify-center text-gray-300 group-hover:border-parish-terracotta group-hover:text-parish-terracotta group-hover:bg-red-50 transition-all ml-2">
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                    )
                }) : (
                    <div className="bg-white p-8 md:p-12 rounded-2xl text-center border border-dashed border-gray-300 opacity-60">
                        <p>Nenhum evento em destaque.</p>
                    </div>
                )}
             </div>

             {/* Link mobile bem visível */}
             <Link to="/agenda" className="md:hidden mt-6 block w-full text-center text-white font-bold text-xs uppercase tracking-widest bg-parish-terracotta py-4 rounded-xl shadow-lg transition-colors">
               Ver Agenda Completa
             </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgendaPreview;