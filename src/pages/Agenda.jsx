import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, MapPin, Calendar as CalIcon } from 'lucide-react';
import { eventosDB } from '../data/eventos'; 

const Agenda = () => {
  const [dataAtual, setDataAtual] = useState(new Date(2025, 0, 1)); 

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
  };

  const getEventosDoDia = (dia) => {
    const dataFormatada = `${ano}-${String(mes + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
    return eventosDB.filter(e => e.data === dataFormatada);
  };

  // Cores baseadas no tipo
  const getEstiloEvento = (tipo) => {
    if (tipo === 'festa') return 'bg-red-50 text-red-700 border-l-2 border-red-500';
    if (tipo === 'festa-box') return 'bg-red-100 text-red-800 border-l-2 border-red-600 font-bold';
    if (tipo === 'verde') return 'bg-green-50 text-green-700 border-l-2 border-green-500';
    if (tipo === 'importante') return 'bg-orange-50 text-parish-terracotta border-l-2 border-parish-terracotta';
    // Comum
    return 'hover:bg-gray-100 text-gray-600';
  };

  return (
    // Fundo texturizado e quente para tirar o "Branco Seco"
    <div className="min-h-screen bg-[#f4f1ea] pt-32 pb-20 px-4 relative">
      
      {/* Decoração de fundo sutil */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
          <div>
            <span className="text-parish-terracotta font-bold tracking-[0.2em] text-xs uppercase mb-1 block">Calendário 2025</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-parish-dark">
              Agenda <span className="italic font-light">Paroquial</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 mt-4 md:mt-0">
             <CalIcon size={16} className="text-parish-gold" />
             Visualizando Ano: <span className="font-bold text-parish-dark">{ano}</span>
          </div>
        </div>

        {/* CONTAINER PRINCIPAL (CARD DO CALENDÁRIO) */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/50">
          
          {/* Barra Superior do Mês */}
          <div className="bg-parish-dark text-white p-6 flex justify-between items-center relative overflow-hidden">
            {/* Efeito decorativo dourado no fundo da barra */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-parish-gold opacity-10 rounded-full blur-3xl -mr-16 -mt-32"></div>

            <button onClick={() => mudarMes(-1)} className="p-3 hover:bg-white/10 rounded-full transition relative z-10 group">
              <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            
            <div className="text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-wider">
                    {meses[mes]}
                </h2>
                <div className="h-1 w-12 bg-parish-gold mx-auto mt-2 rounded-full"></div>
            </div>
            
            <button onClick={() => mudarMes(1)} className="p-3 hover:bg-white/10 rounded-full transition relative z-10 group">
              <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Cabeçalho dos Dias da Semana */}
          <div className="grid grid-cols-7 border-b border-gray-100 bg-[#faf9f6]">
            {diasSemana.map((dia) => (
              <div key={dia} className="py-4 text-center">
                {/* Nome completo desktop */}
                <span className="hidden md:block font-bold text-parish-brown text-xs uppercase tracking-[0.15em]">{dia}</span>
                {/* Nome curto mobile */}
                <span className="md:hidden font-bold text-parish-brown text-xs uppercase">{dia.slice(0,3)}</span>
              </div>
            ))}
          </div>

          {/* GRADE DO CALENDÁRIO */}
          <div className="grid grid-cols-1 sm:grid-cols-7 auto-rows-fr bg-gray-200 gap-[1px] border-b border-gray-200">
            {/* Espaços vazios (Mês anterior) - Com corzinha pra diferenciar */}
            {Array.from({ length: diaInicio }).map((_, index) => (
              <div key={`empty-${index}`} className="hidden sm:block bg-gray-50/50 min-h-[140px]"></div>
            ))}

            {/* Os Dias Reais */}
            {Array.from({ length: diasTotais }).map((_, index) => {
              const dia = index + 1;
              const eventos = getEventosDoDia(dia);
              const ehDomingo = new Date(ano, mes, dia).getDay() === 0;

              return (
                <div 
                  key={dia} 
                  className={`min-h-[120px] sm:min-h-[160px] bg-white p-3 hover:bg-[#fffdf9] transition-colors relative flex flex-col group`}
                >
                  {/* Número do Dia - FONTE NOVA */}
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-2xl font-serif font-bold leading-none ${ehDomingo ? 'text-parish-terracotta' : 'text-gray-300 group-hover:text-parish-gold transition-colors'}`}>
                      {dia}
                    </span>
                    {ehDomingo && <span className="text-[10px] font-bold text-white bg-parish-terracotta px-1.5 rounded uppercase">Dom</span>}
                  </div>

                  {/* Lista de Eventos */}
                  <div className="flex-1 space-y-1.5 overflow-y-auto max-h-[110px] scrollbar-thin scrollbar-thumb-gray-200 pr-1">
                    
                    {/* Eventos fixos de domingo */}
                    {ehDomingo && (
                      <div className="text-[10px] text-gray-400 mb-2 leading-tight flex items-center gap-1 opacity-70">
                         <Clock size={10} /> Missas: 08h e 19h
                      </div>
                    )}
                    
                    {eventos.map((evt, idx) => (
                      <div key={idx} className={`p-1.5 rounded mb-1 text-[10px] md:text-xs leading-tight transition-all cursor-default ${getEstiloEvento(evt.tipo)}`}>
                        {evt.hor && <span className="block font-bold opacity-75 text-[9px] mb-0.5">{evt.hor}</span>}
                        <span className="font-medium">{evt.titulo}</span>
                        {evt.local && (
                            <div className="flex items-center gap-1 mt-1 opacity-60 text-[9px]">
                                <MapPin size={8} /> {evt.local}
                            </div>
                        )}
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
             
             {/* Preencher resto da grade pra ficar quadrado bonito (opcional, só estética) */}
             {/* Calculo simples: se sobrarem blocos, pinta de cinza tbm */}
             {Array.from({ length: (7 - (diaInicio + diasTotais) % 7) % 7 }).map((_, i) => (
                  <div key={`end-${i}`} className="hidden sm:block bg-gray-50/50 min-h-[140px]"></div>
             ))}

          </div>
        </div>

        {/* Legenda Estilizada */}
        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold uppercase tracking-wide text-gray-500 bg-white/60 p-4 rounded-xl inline-flex border border-gray-100">
           <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-100 border border-red-500 rounded"></div> Solenidades</div>
           <div className="flex items-center gap-2"><div className="w-3 h-3 bg-orange-50 border border-parish-terracotta rounded"></div> Eventos Paroquiais</div>
           <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-50 border border-green-500 rounded"></div> Confissões</div>
        </div>

      </div>
    </div>
  );
};

export default Agenda;