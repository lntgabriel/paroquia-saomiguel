import React, { useState } from 'react';
import { 
  Users, Music, BookOpen, Heart, HandHeart, 
  Baby, Shield, Cross, X, Megaphone, 
  CalendarClock, ChevronRight, Mic2 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Pastorais = () => {
  const [selectedPastoral, setSelectedPastoral] = useState(null);

  // --- DADOS ---
  const comissoes = [
    {
      id: "anuncio",
      titulo: "Comissão do Anúncio",
      missao: "Evangelizar, promover a missionariedade, formar e anunciar o Evangelho.",
      cor: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      items: [
        { nome: "Pastoral Familiar", icon: <Users />, desc: "Acompanhamento e fortalecimento das famílias cristãs." },
        { nome: "Pastoral da Juventude", icon: <Users />, desc: "Jovens evangelizando jovens com dinamismo." },
        { nome: "Catequese (IVC)", icon: <BookOpen />, desc: "Iniciação à Vida Cristã para crianças, jovens e adultos." },
        { nome: "Pascom", icon: <Megaphone />, desc: "Pastoral da Comunicação e Mídias Sociais." },
        { nome: "Pastoral do Dízimo", icon: <HandHeart />, desc: "Conscientização sobre a partilha e sustentabilidade." },
        { nome: "ECC", full: "Encontro de Casais com Cristo", icon: <Heart />, desc: "Serviço escola para a evangelização das famílias." },
        { nome: "Rebento de Davi", icon: <Music />, desc: "Movimento carismático e de louvor." }
      ]
    },
    {
      id: "santificacao",
      titulo: "Comissão da Santificação",
      missao: "Promover a vida litúrgica, a espiritualidade e a santificação do povo.",
      cor: "bg-orange-50 border-orange-200",
      iconColor: "text-parish-terracotta",
      items: [
        { nome: "Liturgia Paroquial", icon: <BookOpen />, desc: "Organização e zelo pelas celebrações sagradas." },
        { nome: "Cantores Litúrgicos", icon: <Mic2 />, desc: "Animação musical das santas missas." },
        { nome: "MECEs", full: "Ministros da Eucaristia", icon: <Cross />, desc: "Auxílio na distribuição da eucaristia e visita aos enfermos." },
        { nome: "Pastoral da Saúde", icon: <HandHeart />, desc: "Visita e conforto espiritual aos doentes." },
        { nome: "Pastoral do Batismo", icon: <Baby />, desc: "Preparação de pais e padrinhos." },
        { nome: "Apostolado da Oração", icon: <Heart />, desc: "Devoção ao Sagrado Coração de Jesus." },
        { nome: "Servidores do Altar", full: "Coroinhas e Acólitos", icon: <Shield />, desc: "Serviço ao altar durante as celebrações." },
        { nome: "RCC / Grupo de Oração", icon: <FlameIcon />, desc: "Renovação Carismática Católica." },
        { nome: "Grupos de Terços", icon: <Cross />, desc: "Oração mariana nas comunidades." },
        { nome: "Terço dos Homens", icon: <Users />, desc: "Homens reunidos em oração pelo Rosário." }
      ]
    },
    {
      id: "testemunho",
      titulo: "Comissão do Testemunho",
      missao: "Promover a justiça social e a caridade à luz do Evangelho.",
      cor: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      items: [
        { nome: "Pastoral Social", icon: <HandHeart />, desc: "Ação concreta de ajuda aos mais necessitados." },
        { nome: "Psicologia", full: "Atendimentos Psicológicos", icon: <Users />, desc: "Acolhimento e suporte profissional solidário." },
        { nome: "Grupo de Ginástica", icon: <Users />, desc: "Promoção da saúde física e bem-estar." },
        { nome: "Pastoral da Sobriedade", icon: <Shield />, desc: "Prevenção e recuperação da dependência química." }
      ]
    }
  ];

  return (
    // AJUSTE RESPONSIVO: pt-24 (mobile) vs pt-32 (pc) | pb-32 (mobile pra barra não tapar) vs pb-28
    <div className="min-h-screen bg-[#f4f1ea] pt-24 md:pt-32 pb-32 md:pb-28 px-4 relative overflow-hidden">
      
      {/* Decoração */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/60 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-parish-terracotta font-bold tracking-[0.2em] text-xs uppercase block mb-2">Serviço e Doação</span>
          <h1 className="text-3xl md:text-6xl font-serif font-bold text-parish-dark">
            Pastorais e Movimentos
          </h1>
          <p className="mt-3 md:mt-4 text-sm md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Conheça como nossa paróquia se organiza para evangelizar, santificar e servir.
          </p>
        </div>

        {/* --- LISTA DE COMISSÕES --- */}
        <div className="space-y-12 md:space-y-16">
          {comissoes.map((comissao) => (
            <div key={comissao.id}>
              
              {/* Header da Seção (Responsivo: Flex Col no Mobile) */}
              <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4 mb-6 border-b border-gray-200/50 pb-4 text-center md:text-left">
                 <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-parish-brown">
                        {comissao.titulo}
                    </h2>
                 </div>
                 <p className="text-gray-500 text-xs md:text-sm italic max-w-xl md:text-right hidden md:block">
                    "{comissao.missao}"
                 </p>
              </div>

              {/* Grid Responsivo (1 col mobile -> 2 sm -> 3 lg) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                 {comissao.items.map((item, idx) => (
                    <div 
                        key={idx}
                        onClick={() => setSelectedPastoral({...item, comissao: comissao.titulo})}
                        className={`bg-white p-5 rounded-xl md:rounded-2xl border hover:border-parish-gold/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex items-center gap-4 ${comissao.cor.replace('bg-', 'hover:bg-')}`}
                    >
                        <div className={`p-3 rounded-xl bg-gray-50 group-hover:bg-white transition-colors shrink-0 ${comissao.iconColor}`}>
                            {React.cloneElement(item.icon, { size: 24 })}
                        </div>
                        <div className="flex-1 min-w-0"> {/* min-w-0 evita que texto estoure */}
                            <h3 className="font-serif font-bold text-parish-dark text-base md:text-lg leading-tight mb-0.5 truncate">
                                {item.nome}
                            </h3>
                            {item.full && <p className="text-[10px] text-gray-400 font-bold uppercase truncate">{item.full}</p>}
                        </div>
                        <ChevronRight size={16} className="text-gray-300 group-hover:text-parish-gold transition-colors shrink-0"/>
                    </div>
                 ))}
              </div>

            </div>
          ))}
        </div>

        {/* --- BANNER CPC --- */}
        <div className="mt-16 md:mt-24 bg-parish-dark text-white rounded-2xl md:rounded-3xl p-6 md:p-12 relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold mb-2">Conselhos Pastorais (CPCs)</h3>
                    <p className="text-white/60 text-sm md:text-base max-w-lg">
                        Cada comunidade possui seu conselho. Conheça as capelas e seus padroeiros.
                    </p>
                </div>
                <Link to="/comunidades" className="w-full md:w-auto">
                    <button className="w-full md:w-auto bg-parish-gold text-parish-dark px-6 py-3 rounded-full font-bold hover:bg-white transition-colors shadow-lg text-sm md:text-base">
                        Ver Nossas Comunidades
                    </button>
                </Link>
            </div>
            {/* Decoração */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
        </div>

      </div>

      {/* --- MODAL RESPONSIVO --- */}
      {selectedPastoral && (
        <div className="fixed inset-0 z-[70] flex items-end md:items-center justify-center p-0 md:p-4">
            
            {/* Fundo Escuro (Click fecha) */}
            <div className="absolute inset-0 bg-parish-dark/90 backdrop-blur-sm" onClick={() => setSelectedPastoral(null)}></div>
            
            {/* Caixa do Modal */}
            {/* Mobile: Sobe de baixo (bottom-sheet style). Desktop: Centralizado */}
            <div className="relative bg-white w-full md:max-w-lg rounded-t-3xl md:rounded-2xl shadow-2xl p-6 md:p-8 animate-slideUp md:animate-scaleIn max-h-[85vh] overflow-y-auto">
                
                {/* Barrinha de "arrastar" visual no mobile */}
                <div className="md:hidden w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6"></div>

                <button 
                    onClick={() => setSelectedPastoral(null)}
                    className="hidden md:block absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors"
                >
                    <X size={24}/>
                </button>

                <span className="text-[10px] font-bold uppercase tracking-widest text-parish-terracotta bg-parish-terracotta/10 px-3 py-1 rounded-full mb-4 inline-block">
                    {selectedPastoral.comissao}
                </span>

                <h2 className="text-2xl md:text-3xl font-serif font-bold text-parish-dark mb-2 leading-tight">
                    {selectedPastoral.full || selectedPastoral.nome}
                </h2>
                
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                    {selectedPastoral.desc}
                </p>

                {/* Infos Adicionais */}
                <div className="space-y-4 border-t border-gray-100 pt-6">
                    <div className="flex items-center gap-3">
                        <CalendarClock className="text-parish-gold shrink-0" size={20}/>
                        <div>
                            <p className="text-xs font-bold uppercase text-gray-400">Reuniões</p>
                            <p className="text-sm font-medium text-gray-700">Consulte a agenda paroquial.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Users className="text-parish-gold shrink-0" size={20}/>
                        <div>
                            <p className="text-xs font-bold uppercase text-gray-400">Como participar?</p>
                            <p className="text-sm font-medium text-gray-700">Todos são bem-vindos! Fale com o coordenador.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-4 flex flex-col md:flex-row gap-3">
                    <button 
                        onClick={() => setSelectedPastoral(null)}
                        className="md:hidden w-full bg-gray-100 text-gray-500 py-3 rounded-xl font-bold text-sm"
                    >
                        Fechar
                    </button>
                    <Link to="/contato" className="flex-1 bg-parish-dark text-white text-center py-3 rounded-xl font-bold text-sm hover:bg-black transition-colors">
                        Fale Conosco
                    </Link>
                </div>

            </div>
        </div>
      )}

    </div>
  );
};

const FlameIcon = ({className, size}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size||24} height={size||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.5-3.3a9 9 0 0 0 .9 6.5"/></svg>
);

export default Pastorais;