import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, MapPin, Calendar as CalIcon, Info } from 'lucide-react';
import { eventosDB } from '../data/eventos'; 

const Agenda = () => {
  const [dataAtual, setDataAtual] = useState(new Date(2025, 0, 1)); 
  const [diaSelecionado, setDiaSelecionado] = useState(null); // Novo estado para o clique

  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  // Lógica do Calendário
  const getDiasNoMes = (mes, ano) => new Date(ano, mes + 1, 0).getDate();
  const getDiaSemanaInicio = (mes, ano) => new Date(ano, mes, 1).getDay();

  const ano = dataAtual.getFullYear();
  const mes = dataAtual.getMonth();

  const diasTotais = getDiasNoMes(mes, ano);
  const diaInicio = getDiaSemanaInicio(mes, ano);

  const mudarMes = (direcao) => {
    setDataAtual(new Date(ano, mes + direcao, 1));
    setDiaSelecionado(null); // Limpa a seleção ao mudar de mês
  };

  const getEventosDoDia = (dia) => {
    const dataFormatada = `${ano}-${String(mes + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
    return eventosDB.filter(e => e.data === dataFormatada);
  };

  // Seleciona automaticamente o dia 1 ou o dia atual ao carregar
  useEffect(() => {
     setDiaSelecionado(null);
  }, [dataAtual]);

  // Estilos
  const getEstiloEvento = (tipo) => {
    if (tipo === 'festa') return 'bg-red-50 text-red-700 border-l-2 border-red-500';
    if (tipo === 'festa-box') return 'bg-red-100 text-red-800 border-l-2 border-red-600 font-bold';
    if (tipo === 'verde') return 'bg-green-50 text-green-700 border-l-2 border-green-500';
    if (tipo === 'importante') return 'bg-orange-50 text-parish-terracotta border-l-2 border-parish-terracotta';
    return 'hover:bg-gray-100 text-gray-600';
  };

  const getCorBolinha = (tipo) => {
    if (tipo === 'festa' || tipo === 'festa-box') return 'bg-red-500';
    if (tipo === 'verde') return 'bg-green-500';
    if (tipo === 'importante') return 'bg-parish-terracotta';
    return 'bg-gray-400';
  }

  // Eventos do dia selecionado (Para mostrar na lista móvel)
  const eventosDoDiaSelecionado = diaSelecionado ? getEventosDoDia(diaSelecionado) : [];

  return (
    <div className="min-h-screen bg-[#f4f1ea] pt-24 md:pt-32 pb-32 md:pb-20 px-2 md:px-4 relative">
      
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-6 md:mb-8 text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <span className="text-parish-terracotta font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-1 block">Calendário 2025</span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-parish-dark">
              Agenda <span className="italic font-light">Paroquial</span>
            </h1>
          </div>
          
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
             <CalIcon size={16} className="text-parish-gold" />
             Ano Litúrgico: <span className="font-bold text-parish-dark">{ano}</span>
          </div>
        </div>

        {/* CONTAINER DO CALENDÁRIO */}
        <div className="bg-white rounded-xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden border border-white/50">
          
          {/* Barra do Mês */}
          <div className="bg-parish-dark text-white p-4 md:p-6 flex justify-between items-center relative overflow-hidden">
            <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-parish-gold opacity-10 rounded-full blur-3xl -mr-16 -mt-32"></div>

            <button onClick={() => mudarMes(-1)} className="p-2 md:p-3 hover:bg-white/10 rounded-full transition relative z-10 group">
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            
            <div className="text-center relative z-10">
                <h2 className="text-2xl md:text-4xl font-serif font-bold uppercase tracking-wider">
                    {meses[mes]}
                </h2>
                <div className="h-1 w-8 md:w-12 bg-parish-gold mx-auto mt-1 md:mt-2 rounded-full"></div>
            </div>
            
            <button onClick={() => mudarMes(1)} className="p-2 md:p-3 hover:bg-white/10 rounded-full transition relative z-10 group">
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-7 border-b border-gray-100 bg-[#faf9f6]">
            {diasSemana.map((dia) => (
              <div key={dia} className="py-2 md:py-4 text-center">
                <span className="hidden md:block font-bold text-parish-brown text-xs uppercase tracking-[0.15em]">{dia}</span>
                <span className="md:hidden font-bold text-parish-brown text-[9px] uppercase">{dia.slice(0,3)}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 auto-rows-fr bg-gray-200 gap-[1px] border-b border-gray-200">
            {/* Vazios */}
            {Array.from({ length: diaInicio }).map((_, index) => (
              <div key={`empty-${index}`} className="bg-gray-50/50 min-h-[50px] md:min-h-[140px]"></div>
            ))}

            {/* Dias Reais */}
            {Array.from({ length: diasTotais }).map((_, index) => {
              const dia = index + 1;
              const eventos = getEventosDoDia(dia);
              const ehDomingo = new Date(ano, mes, dia).getDay() === 0;
              // Verifica se está selecionado no mobile
              const isSelected = diaSelecionado === dia;

              return (
                <div 
                  key={dia} 
                  // ADICIONADO onClick aqui
                  onClick={() => setDiaSelecionado(dia)}
                  className={`
                    min-h-[60px] md:min-h-[160px] bg-white p-1 md:p-3 relative flex flex-col group cursor-pointer md:cursor-default
                    ${ehDomingo ? 'bg-red-50/20' : ''}
                    ${isSelected ? 'md:bg-white bg-parish-gold/20' : 'active:bg-gray-50'}
                  `}
                >
                  <div className="flex justify-center md:justify-between items-start mb-1 md:mb-2">
                    <span className={`text-sm md:text-2xl font-serif font-bold leading-none ${ehDomingo ? 'text-parish-terracotta' : 'text-gray-400 md:text-gray-300 md:group-hover:text-parish-gold'} ${isSelected ? 'text-parish-brown scale-125 md:scale-100 transition-transform' : ''}`}>
                      {dia}
                    </span>
                    {ehDomingo && <span className="hidden md:inline-block text-[10px] font-bold text-white bg-parish-terracotta px-1.5 rounded uppercase">Dom</span>}
                  </div>

                  {/* BOLINHAS NO MOBILE */}
                  <div className="md:hidden flex flex-wrap justify-center gap-1 mt-1">
                     {eventos.map((evt, i) => (
                        <div key={i} className={`w-1.5 h-1.5 rounded-full ${getCorBolinha(evt.tipo)}`}></div>
                     ))}
                  </div>

                  {/* TEXTO DESKTOP */}
                  <div className="hidden md:block flex-1 space-y-1.5 overflow-y-auto max-h-[110px] scrollbar-thin scrollbar-thumb-gray-200 pr-1">
                    {ehDomingo && (
                      <div className="text-[10px] text-gray-400 mb-2 leading-tight flex items-center gap-1 opacity-70">
                         <Clock size={10} /> 08h | 19h
                      </div>
                    )}
                    {eventos.map((evt, idx) => (
                      <div key={idx} className={`p-1.5 rounded mb-1 text-[10px] md:text-xs leading-tight transition-all cursor-default ${getEstiloEvento(evt.tipo)}`}>
                        {evt.hora && <span className="block font-bold opacity-75 text-[9px] mb-0.5">{evt.hor}</span>}
                        <span className="font-medium">{evt.titulo}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
             {/* Completar Grid */}
             {Array.from({ length: (7 - (diaInicio + diasTotais) % 7) % 7 }).map((_, i) => (
                  <div key={`end-${i}`} className="bg-gray-50/50 min-h-[50px] md:min-h-[140px]"></div>
             ))}
          </div>
        </div>

        {/* --- APENAS MOBILE: DETALHES DO DIA SELECIONADO --- */}
        <div className="md:hidden mt-6 bg-white p-6 rounded-2xl shadow-sm border border-parish-light/50 transition-all duration-300">
            {diaSelecionado ? (
                <div>
                    <h3 className="font-serif font-bold text-2xl text-parish-dark mb-4 flex items-center gap-2">
                        {diaSelecionado} de {meses[mes]}
                    </h3>
                    
                    <div className="space-y-3">
                        {/* Mensagem fixa se for Domingo */}
                        {new Date(ano, mes, diaSelecionado).getDay() === 0 && (
                            <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                                <Clock className="text-parish-terracotta shrink-0" size={18}/>
                                <div>
                                    <p className="text-xs font-bold uppercase text-red-400 mb-0.5">Domingo</p>
                                    <p className="text-sm font-bold text-parish-terracotta">Santa Missa: 08:00 e 19:00</p>
                                </div>
                            </div>
                        )}

                        {/* Lista de eventos */}
                        {eventosDoDiaSelecionado.length > 0 ? (
                            eventosDoDiaSelecionado.map((evt, idx) => (
                                <div key={idx} className="flex gap-4 p-3 border-b border-dashed border-gray-100 last:border-0 items-start">
                                    <div className="shrink-0 pt-1">
                                        <div className={`w-3 h-3 rounded-full ${getCorBolinha(evt.tipo)}`}></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-parish-dark text-sm leading-tight mb-1">{evt.titulo}</h4>
                                        <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                                            {evt.hora && <span className="flex items-center gap-1"><Clock size={12}/> {evt.hora}</span>}
                                            {evt.local && <span className="flex items-center gap-1"><MapPin size={12}/> {evt.local}</span>}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            // Se não for domingo e não tiver evento
                            new Date(ano, mes, diaSelecionado).getDay() !== 0 && (
                                <p className="text-gray-400 text-sm italic py-2">Nenhum evento paroquial agendado para este dia.</p>
                            )
                        )}
                    </div>
                </div>
            ) : (
                <div className="text-center py-6 text-gray-400">
                    <Info size={32} className="mx-auto mb-2 opacity-50"/>
                    <p className="text-sm">Toque em um dia no calendário acima para ver os horários e detalhes.</p>
                </div>
            )}
        </div>

        {/* Legenda Desktop (Escondi no mobile pra não poluir, ja que o destaque agora é clicar) */}
        <div className="hidden md:flex mt-8 flex-wrap justify-start gap-4 text-xs font-bold uppercase tracking-wide text-gray-500 bg-white/60 p-4 rounded-xl border border-gray-100">
           <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-100 border border-red-500 rounded"></div> Solenidades</div>
           <div className="flex items-center gap-2"><div className="w-3 h-3 bg-orange-50 border border-parish-terracotta rounded"></div> Paroquial</div>
           <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-50 border border-green-500 rounded"></div> Confissões</div>
        </div>

      </div>
    </div>
  );
};

export default Agenda;