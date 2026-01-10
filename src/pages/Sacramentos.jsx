import React, { useState } from 'react';
import { 
  Droplets, Heart, Users, Flame, BookOpen, AlertCircle, 
  X, CheckCircle, FileText, HelpCircle, Info 
} from 'lucide-react';

const Sacramentos = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState('significado');

  const sacramentos = [
    {
      id: "batismo",
      title: "Batismo",
      icon: <Droplets size={40} />,
      color: "bg-blue-100 text-blue-700",
      shortDesc: "O fundamento de toda a vida cristã e a porta de acesso aos demais sacramentos.",
      conteudo: {
        significado: {
          texto: "O Santo Batismo é o fundamento de toda a vida cristã, o pórtico da vida no Espírito e a porta que abre o acesso aos demais sacramentos. Pelo Batismo somos libertados do pecado e regenerados como filhos de Deus.",
          biblia: '"Ide, pois, fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo." (Mt 28:19)',
          efeitos: ["Remissão do Pecado", "Filho de Deus", "Membro da Igreja"]
        },
        requisitos: {
          documentos: ["Certidão de Nascimento", "RG Pais e Padrinhos", "Comprovante Residência", "Certificado do Curso"],
          regrasPadrinhos: ["Católicos batizados/crismados", "Maiores de 16 anos", "Se casados, no religioso"],
          processo: ["Inscrição na secretaria", "Curso preparatório", "Entrega de documentos", "Batizado (2º ou 4º Domingo)"]
        },
        faq: [
          { p: "Pode em outra paróquia?", r: "Sim, com autorização (transferência)." },
          { p: "Quanto custa?", r: "É pedida uma taxa para custos de registro e igreja." }
        ]
      }
    },
    {
      id: "eucaristia",
      title: "1ª Eucaristia",
      icon: <BookOpen size={40} />,
      color: "bg-parish-light text-parish-brown",
      shortDesc: "Recebimento do Corpo e Sangue de Cristo. Requer preparação através da catequese.",
      conteudo: {
        significado: {
          texto: "A Sagrada Eucaristia completa a iniciação cristã. Participamos do próprio sacrifício do Senhor, fonte e ápice de toda a vida cristã.",
          biblia: '"Eu sou o pão vivo que desceu do céu." (Jo 6:51)',
          efeitos: ["União com Cristo", "Separação do pecado", "Vida da graça"]
        },
        requisitos: {
          documentos: ["Lembrança do Batismo", "RG da Criança", "Inscrição na Catequese"],
          regrasPadrinhos: ["Não há padrinhos, apenas acompanhamento dos pais."],
          processo: ["Catequese Infantil", "Duração de 2 a 3 anos", "Inscrições no início do ano"]
        },
        faq: [
          { p: "Qual idade mínima?", r: "Geralmente a partir dos 8/9 anos (alfabetizado)." }
        ]
      }
    },
    {
      id: "crisma",
      title: "Crisma",
      icon: <Flame size={40} />,
      color: "bg-red-100 text-parish-terracotta",
      shortDesc: "Confirmação da graça batismal e o selo do Espírito Santo.",
      conteudo: {
        significado: {
          texto: "O sacramento da Confirmação enriquece os batizados com a força do Espírito Santo para serem verdadeiras testemunhas de Cristo.",
          biblia: '"Recebei o Espírito Santo." (Jo 20:22)',
          efeitos: ["Dons do Espírito", "Caráter indelével", "Maturidade cristã"]
        },
        requisitos: {
          documentos: ["Batistério", "Comp. Eucaristia", "RG Crismando/Padrinho"],
          regrasPadrinhos: ["Católico, crismado e de vida idônea."],
          processo: ["Preparação de 1 ano", "75% frequência", "Retiro espiritual"]
        },
        faq: [
          { p: "Se eu faltar?", r: "Reprovação por falta existe na catequese." }
        ]
      }
    },
    {
      id: "matrimonio",
      title: "Matrimônio",
      icon: <Heart size={40} />,
      color: "bg-pink-100 text-pink-600",
      shortDesc: "A união sagrada entre homem e mulher.",
      conteudo: {
        significado: {
          texto: "A aliança matrimonial, pela qual o homem e a mulher constituem entre si uma comunhão da vida toda, ordenada ao bem dos cônjuges e à prole.",
          biblia: '"O que Deus uniu, o homem não separe." (Mc 10:9)',
          efeitos: ["Unidade", "Indissolubilidade", "Graça de estado"]
        },
        requisitos: {
          documentos: ["Batistério atualizado (6 meses)", "Curso de Noivos", "Habilitação Civil"],
          regrasPadrinhos: ["Testemunhas do ato (qualquer credo)."],
          processo: ["Agendar 6 meses antes", "Entrevista com Padre", "Proclamas"]
        },
        faq: [
          { p: "Casar em sítio?", r: "Não permitido na diocese." }
        ]
      }
    },
    {
        id: "confissao",
        title: "Confissão",
        icon: <Users size={40} />,
        color: "bg-purple-100 text-purple-600",
        shortDesc: "Perdão dos pecados e reconciliação.",
        conteudo: {
          significado: {
            texto: "Obtemos da misericórdia de Deus o perdão da ofensa a Ele feita e nos reconciliamos com a Igreja.",
            biblia: '"A quem perdoardes, lhes serão perdoados." (Jo 20:23)',
            efeitos: ["Paz de consciência", "Restituição da graça"]
          },
          requisitos: {
            documentos: ["Apenas exame de consciência."],
            regrasPadrinhos: ["Não se aplica."],
            processo: ["Exame de consciência", "Arrependimento", "Confissão", "Penitência"]
          },
          faq: [
            { p: "Padre conta?", r: "Sigilo absoluto sob pena de excomunhão." }
          ]
        }
      },
      {
        id: "uncao",
        title: "Unção",
        icon: <AlertCircle size={40} />,
        color: "bg-green-100 text-green-600",
        shortDesc: "Conforto na doença e velhice.",
        conteudo: {
            significado: {
                texto: "Entrega os doentes ao Senhor sofredor e glorificado, para que os alivie e salve.",
                biblia: '"Alguém doente? Chame os presbíteros." (Tg 5:14)',
                efeitos: ["União à Paixão", "Perdão dos pecados", "Conforto"]
              },
            requisitos: {
              documentos: ["Nenhum."],
              regrasPadrinhos: ["Nenhum."],
              processo: ["Chamar secretaria com urgência."]
            },
            faq: [
              { p: "Só pra morrer?", r: "Não, para qualquer doença grave." }
            ]
        }
      }
  ];

  // COMPONENTE INTERNO DO MODAL (Conteúdo)
  const ModalContent = ({ sacramento }) => {
    return (
        <div className="flex flex-col h-full bg-white">
            {/* Navegação de Abas (Stick on top inside modal) */}
            <div className="flex border-b border-gray-200 bg-white sticky top-0 z-10">
                {['significado', 'requisitos', 'faq'].map((tab) => (
                    <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)} 
                        className={`flex-1 py-3 text-xs md:text-sm font-bold uppercase tracking-wide transition-colors
                        ${activeTab === tab ? 'text-parish-terracotta border-b-4 border-parish-terracotta bg-red-50/50' : 'text-gray-400 hover:bg-gray-50'}`}
                    >
                        {tab === 'faq' ? 'Dúvidas' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* Conteúdo com Scroll */}
            <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-6">
                
                {/* ABA 1: SIGNIFICADO */}
                {activeTab === 'significado' && (
                    <div className="space-y-6 animate-fadeIn">
                        <div className="bg-parish-light/30 p-5 rounded-xl border-l-4 border-parish-gold">
                            <h3 className="font-serif font-bold text-parish-brown text-lg mb-2">O que é?</h3>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                                {sacramento.conteudo.significado.texto}
                            </p>
                        </div>
                        <div>
                             <h4 className="flex items-center gap-2 font-bold text-parish-dark text-xs uppercase mb-2">
                                <Info size={16}/> Na Bíblia
                             </h4>
                             <p className="italic text-gray-500 bg-gray-50 p-4 rounded-lg text-sm border border-gray-100">
                                {sacramento.conteudo.significado.biblia}
                             </p>
                        </div>
                        <div>
                             <h4 className="font-bold text-parish-dark text-xs uppercase mb-3">Efeitos Espirituais</h4>
                             <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                 {sacramento.conteudo.significado.efeitos.map((ef, i) => (
                                     <li key={i} className="flex items-center gap-2 text-sm text-gray-700 bg-white p-2 rounded border border-gray-100 shadow-sm">
                                         <CheckCircle size={14} className="text-green-500"/> {ef}
                                     </li>
                                 ))}
                             </ul>
                        </div>
                    </div>
                )}

                {/* ABA 2: REQUISITOS */}
                {activeTab === 'requisitos' && (
                    <div className="space-y-6 animate-fadeIn">
                        
                        <div>
                            <h4 className="flex items-center gap-2 font-bold text-parish-dark text-sm uppercase mb-3 border-b border-gray-100 pb-2">
                                <FileText size={18} className="text-parish-terracotta"/> Documentos
                            </h4>
                            <ul className="space-y-2">
                                {sacramento.conteudo.requisitos.documentos.map((doc, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 shrink-0"></span>
                                        {doc}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="flex items-center gap-2 font-bold text-parish-dark text-sm uppercase mb-3 border-b border-gray-100 pb-2">
                                <Users size={18} className="text-parish-terracotta"/> Padrinhos / Pais
                            </h4>
                            <ul className="space-y-2">
                                {sacramento.conteudo.requisitos.regrasPadrinhos.map((regra, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                        <span className="w-1.5 h-1.5 bg-parish-terracotta rounded-full mt-1.5 shrink-0"></span>
                                        {regra}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                             <h4 className="font-bold text-gray-400 text-xs uppercase mb-3">Passo a Passo</h4>
                             <div className="space-y-3">
                                 {sacramento.conteudo.requisitos.processo.map((passo, i) => (
                                     <div key={i} className="flex items-center gap-3">
                                         <div className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center text-xs font-bold text-parish-gold shadow-sm shrink-0">
                                            {i + 1}
                                         </div>
                                         <p className="text-sm font-medium text-gray-700">{passo}</p>
                                     </div>
                                 ))}
                             </div>
                        </div>
                    </div>
                )}

                {/* ABA 3: FAQ */}
                {activeTab === 'faq' && (
                    <div className="space-y-4 animate-fadeIn">
                        {sacramento.conteudo.faq.map((item, i) => (
                            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                                <div className="bg-gray-50 p-3 font-bold text-parish-dark text-xs md:text-sm flex gap-2 items-center">
                                    <HelpCircle size={16} className="text-parish-gold"/>
                                    {item.p}
                                </div>
                                <div className="p-3 bg-white text-gray-600 text-xs md:text-sm leading-relaxed border-t border-gray-100">
                                    {item.r}
                                </div>
                            </div>
                        ))}
                        
                        <div className="text-center p-4">
                            <p className="text-xs text-gray-400">Mais dúvidas? Chame no WhatsApp.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
  };

  return (
    // ADJUSTE RESPONSIVO: pb-32 no mobile pra barra inferior
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-32 pb-32 md:pb-20">
      
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-parish-dark">Vida Sacramental</h1>
        <p className="mt-3 text-sm md:text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">
          Clique nos cards para ver detalhes sobre documentos e requisitos.
        </p>
        <div className="mt-6 h-1 w-16 bg-parish-terracotta rounded mx-auto md:mx-0"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sacramentos.map((item) => (
            <div 
              key={item.id}
              onClick={() => { setSelectedItem(item); setActiveTab('significado'); }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all cursor-pointer flex flex-col items-center text-center group active:scale-95 duration-200"
            >
               <div className={`mb-4 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${item.color}`}>
                   {item.icon}
               </div>
               <h2 className="text-xl font-serif font-bold text-parish-dark mb-2">
                   {item.title}
               </h2>
               <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4 line-clamp-3">
                   {item.shortDesc}
               </p>
               <span className="mt-auto text-[10px] font-bold uppercase tracking-wider text-parish-terracotta border-b border-transparent group-hover:border-parish-terracotta">
                   Ver Requisitos
               </span>
            </div>
        ))}
      </div>

      {/* --- O MODAL --- */}
      {selectedItem && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            {/* Fundo preto (Fecha ao clicar) */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedItem(null)}></div>
            
            {/* Card do Modal - Ocupa quase tudo no mobile (w-[95%]) e altura boa */}
            <div className="relative bg-white w-[95%] md:w-full max-w-2xl h-[80vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scaleIn">
                
                {/* Header (Título + Fechar) */}
                <div className="bg-parish-dark text-white p-5 flex justify-between items-center shrink-0">
                    <div className="flex items-center gap-3">
                        {React.cloneElement(selectedItem.icon, { size: 24, className: 'text-parish-gold' })}
                        <h2 className="text-xl md:text-2xl font-serif font-bold leading-none">{selectedItem.title}</h2>
                    </div>
                    <button onClick={() => setSelectedItem(null)} className="p-1 rounded-full hover:bg-white/10 text-white/70 hover:text-white">
                        <X size={24} />
                    </button>
                </div>

                {/* Componente das Abas */}
                <ModalContent sacramento={selectedItem} />

            </div>
        </div>
      )}

    </div>
  );
};

export default Sacramentos;