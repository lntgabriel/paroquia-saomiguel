import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, MapPin, Calendar as CalIcon, Info } from 'lucide-react';
import { eventosDB } from '../data/eventos'; 

const Agenda = () => {
  const [dataAtual, setDataAtual] = useState(new Date(2026, 0, 1)); 
  const [diaSelecionado, setDiaSelecionado] = useState(null); 

  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  const getDiasNoMes = (mes, ano) => new Date(ano, mes + 1, 0).getDate();
  const getDiaSemanaInicio = (mes, ano) => new Date(ano, mes, 1).getDay();

  const ano = dataAtual.getFullYear();
  const mes = dataAtual.getMonth();
  const diasTotais = getDiasNoMes(mes, ano);
  const diaInicio = getDiaSemanaInicio(mes, ano);

  const mudarMes = (direcao) => {
    setDataAtual(new Date(ano, mes + direcao, 1));
    setDiaSelecionado(null); 
  };

  useEffect(() => { setDiaSelecionado(null); }, [dataAtual]);

  // --- LÓGICA DE OURO: CALCULANDO MISSAS E CONFISSÕES ---
  const getEventosCompletos = (dia) => {
    const dataObj = new Date(ano, mes, dia);
    const diaSemana = dataObj.getDay(); // 0=Dom, 3=Qua, 6=Sab
    const diasNoMes = getDiasNoMes(mes, ano);
    
    // String data
    const dataString = `${ano}-${String(mes + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
    let listaEventos = eventosDB.filter(e => e.data === dataString);

    // --- DOMINGO (0) ---
    if (diaSemana === 0) {
        listaEventos.push({ titulo: 'Missa Matriz', hora: '08:00', local: 'São Miguel', tipo: 'fixo' });
        listaEventos.push({ titulo: 'Missa Matriz e Imaculada', hora: '10:00', local: 'Matriz / Imaculada', tipo: 'fixo' });
        listaEventos.push({ titulo: 'Missa nas Comunidades', hora: '18:00', local: 'Santa Rita / Santa Edwiges', tipo: 'fixo' });
        listaEventos.push({ titulo: 'Missa Natividade', hora: '19:30', local: 'Com. Natividade', tipo: 'fixo' });
    }

    // --- QUARTA (3) ---
    if (diaSemana === 3) {
        // Confissão (Toda Quarta)
        listaEventos.push({ titulo: 'Confissões (Atendimento)', hora: '17:00 - 19:00', local: 'Matriz', tipo: 'verde' });

        // Se for a 1ª Quarta do mês (dia 1 a 7)
        if (dia <= 7) {
            listaEventos.push({ titulo: 'Missa e Adoração', hora: '20:00', local: 'Matriz São Miguel', tipo: 'importante' });
        } else {
            // Quartas normais
            listaEventos.push({ titulo: 'Missa Semanal', hora: '19:30', local: 'Matriz São Miguel', tipo: 'fixo' });
        }
    }

    // --- QUINTA (4) ---
    if (diaSemana === 4) {
        listaEventos.push({ titulo: 'Missa Semanal', hora: '20:00', local: 'Com. Imaculada', tipo: 'fixo' });
    }

    // --- SEXTA (5) ---
    if (diaSemana === 5) {
        // 1ª Sexta do mês
        if (dia <= 7) {
             listaEventos.push({ titulo: 'Missa e Adoração', hora: '20:00', local: 'Com. Sagrado Coração', tipo: 'fixo' });
        } else {
          // Sextas normais 
          listaEventos.push({ titulo: 'Missa Semanal', hora: '20:00', local: 'Matriz São Miguel', tipo: 'fixo' });
        }
    }

    // --- SÁBADO (6) ---
    if (diaSemana === 6) {
        // Confissão
        listaEventos.push({ titulo: 'Confissões (Atendimento)', hora: '09:00 - 11:30', local: 'Matriz', tipo: 'verde' });

        // Missas
        listaEventos.push({ titulo: 'Missa', hora: '18:00', local: 'Com. Divino Esp. Santo', tipo: 'fixo' });
        listaEventos.push({ titulo: 'Missa', hora: '19:30', local: 'Com. Sagrado Coração', tipo: 'fixo' });
        listaEventos.push({ titulo: 'Missa', hora: '20:00', local: 'Com. NS do Carmo', tipo: 'fixo' });
    }

    // Dia 29 (Votiva São Miguel) - Se já estiver cadastrada no banco de eventos ele puxa, se não, pode deixar quieto ou forçar aqui
    
    return listaEventos;
  };

  const getTiposEventosDia = (dia) => getEventosCompletos(dia).map(e => e.tipo);

  // Estilos
  const getCorBolinha = (tipo) => {
    if (tipo === 'festa' || tipo === 'festa-box') return 'bg-red-500';
    if (tipo === 'fixo') return 'bg-parish-dark';
    if (tipo === 'verde') return 'bg-green-500'; // Confissões
    if (tipo === 'importante') return 'bg-parish-terracotta';
    return 'bg-gray-400';
  };

  const getCorTag = (tipo) => {
      if(tipo === 'verde') return 'text-green-700 bg-green-50 border-green-200'; // Estilo pra confissão
      if(tipo === 'festa' || tipo === 'festa-box') return 'text-red-600 bg-red-50 border-red-100';
      if(tipo === 'importante') return 'text-orange-600 bg-orange-50 border-orange-100';
      return 'text-gray-600 bg-gray-50 border-gray-100';
  };

  const eventosDoDiaSelecionado = diaSelecionado ? getEventosCompletos(diaSelecionado) : [];

  return (
    <div className="min-h-screen bg-[#f4f1ea] pt-24 md:pt-32 pb-32 md:pb-20 px-2 md:px-4 relative">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-6 md:mb-8 text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <span className="text-parish-terracotta font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-1 block">Liturgia & Eventos</span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-parish-dark">
              Agenda <span className="italic font-light">Paroquial</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
             <CalIcon size={16} className="text-parish-gold" />
             <span className="font-bold text-parish-dark">2026</span>
          </div>
        </div>

        {/* CALENDÁRIO */}
        <div className="bg-white rounded-xl md:rounded-3xl shadow-xl overflow-hidden border border-white/50">
          <div className="bg-parish-dark text-white p-4 md:p-6 flex justify-between items-center relative overflow-hidden">
            <button onClick={() => mudarMes(-1)} className="p-2 hover:bg-white/10 rounded-full transition relative z-10"><ChevronLeft size={24}/></button>
            <h2 className="text-2xl md:text-4xl font-serif font-bold uppercase tracking-wider relative z-10">{meses[mes]}</h2>
            <button onClick={() => mudarMes(1)} className="p-2 hover:bg-white/10 rounded-full transition relative z-10"><ChevronRight size={24}/></button>
          </div>

          <div className="grid grid-cols-7 border-b border-gray-100 bg-[#faf9f6]">
            {diasSemana.map(d => <div key={d} className="py-3 text-center"><span className="text-[10px] md:text-xs font-bold text-parish-brown uppercase">{d.slice(0,3)}</span></div>)}
          </div>

          <div className="grid grid-cols-7 auto-rows-fr bg-gray-200 gap-[1px] border-b border-gray-200">
            {Array.from({ length: diaInicio }).map((_, i) => <div key={`e-${i}`} className="bg-gray-50/50 min-h-[60px] md:min-h-[140px]"></div>)}

            {Array.from({ length: diasTotais }).map((_, i) => {
              const dia = i + 1;
              const tiposEventos = getTiposEventosDia(dia);
              const ehDomingo = new Date(ano, mes, dia).getDay() === 0;
              const isSelected = diaSelecionado === dia;

              return (
                <div 
                  key={dia} 
                  onClick={() => setDiaSelecionado(dia)}
                  className={`min-h-[60px] md:min-h-[140px] bg-white p-1 md:p-3 flex flex-col cursor-pointer transition-colors relative 
                    ${ehDomingo ? 'bg-red-50/20' : ''} ${isSelected ? 'ring-2 ring-inset ring-parish-terracotta bg-parish-terracotta/5' : 'hover:bg-gray-50'}`}
                >
                  <div className="flex justify-center md:justify-between items-start">
                    <span className={`text-sm md:text-2xl font-serif font-bold leading-none ${ehDomingo ? 'text-parish-terracotta' : 'text-gray-400'}`}>{dia}</span>
                    {ehDomingo && <span className="hidden md:inline-block text-[10px] font-bold text-white bg-parish-terracotta px-1 rounded uppercase">Dom</span>}
                  </div>
                  
                  {/* Indicadores (Bolinhas) */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-1 mt-1 md:mt-2">
                     {tiposEventos.slice(0, 5).map((tipo, idx) => (
                        <div key={idx} className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${getCorBolinha(tipo)}`}></div>
                     ))}
                  </div>
                </div>
              );
            })}
            
            {Array.from({ length: (7 - (diaInicio + diasTotais) % 7) % 7 }).map((_, i) => <div key={`end-${i}`} className="bg-gray-50/50 min-h-[60px] md:min-h-[140px]"></div>)}
          </div>
        </div>

        {/* DETALHES (Mobile & Desktop) */}
        <div id="detalhes" className="mt-8 transition-all">
            {diaSelecionado ? (
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-parish-gold/20 animate-slideUp">
                    <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                        <div className="bg-parish-dark text-white w-12 h-12 flex items-center justify-center rounded-xl font-serif font-bold text-xl">
                            {diaSelecionado}
                        </div>
                        <div>
                            <h3 className="font-serif font-bold text-2xl text-parish-dark">Programação</h3>
                            <p className="text-gray-500 text-sm capitalize">{new Date(ano, mes, diaSelecionado).toLocaleDateString('pt-BR', {weekday: 'long', month:'long'})}</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {eventosDoDiaSelecionado.length > 0 ? (
                            eventosDoDiaSelecionado.map((evt, idx) => (
                                <div key={idx} className={`p-4 rounded-xl border flex items-start gap-4 ${getCorTag(evt.tipo).replace('text-','border-')}`}>
                                    <div className="mt-1 text-parish-gold"><Clock size={18}/></div>
                                    <div>
                                        <p className="font-bold text-lg text-parish-dark leading-tight mb-1">{evt.titulo}</p>
                                        <div className="flex gap-3 text-sm text-gray-600">
                                            {evt.hora && <span className="font-mono bg-white border border-gray-200 px-2 rounded font-bold text-xs flex items-center">{evt.hora}</span>}
                                            {evt.local && <span className="flex items-center gap-1"><MapPin size={12}/> {evt.local}</span>}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400 italic col-span-2 text-center py-4">Sem celebração oficial neste dia.</p>
                        )}
                    </div>
                </div>
            ) : (
                <div className="text-center py-8 text-gray-400 border-t border-dashed border-gray-300">
                    <Info size={32} className="mx-auto mb-2 opacity-50"/>
                    <p>Toque em um dia no calendário para ver Missas e Confissões.</p>
                </div>
            )}
        </div>

      </div>
    </div>
  );
};

export default Agenda;