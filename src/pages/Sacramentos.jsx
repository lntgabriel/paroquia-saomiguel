import React, { useState } from 'react';
import { 
  Droplets, Heart, Users, Flame, BookOpen, AlertCircle, 
  X, CheckCircle, FileText, HelpCircle, Info 
} from 'lucide-react';

const Sacramentos = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState('significado');

  // --- BASE DE DADOS DETALHADA ---
  const sacramentos = [
    {
      id: "batismo",
      title: "Batismo",
      icon: <Droplets size={40} />,
      color: "bg-blue-100 text-blue-700",
      accent: "border-blue-500",
      shortDesc: "O fundamento de toda a vida cristã e a porta de acesso aos demais sacramentos.",
      // DETALHES COMPLETOS
      conteudo: {
        significado: {
          texto: "O Santo Batismo é o fundamento de toda a vida cristã, o pórtico da vida no Espírito e a porta que abre o acesso aos demais sacramentos. Pelo Batismo somos libertados do pecado e regenerados como filhos de Deus, tornamo-nos membros de Cristo, somos incorporados na Igreja e feitos participantes de sua missão.",
          biblia: '"Ide, pois, fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo." (Mateus 28:19)',
          efeitos: ["Remissão do Pecado Original", "Tornar-se Filho de Deus", "Membro da Igreja"]
        },
        requisitos: {
          documentos: [
            "Certidão de Nascimento da Criança (Original e Cópia)",
            "RG e CPF dos Pais",
            "RG e CPF dos Padrinhos",
            "Comprovante de residência dos pais",
            "Comprovante do Curso de Batismo (Pais e Padrinhos)"
          ],
          regrasPadrinhos: [
            "Devem ser católicos, batizados e crismados (Obrigatório).",
            "Maiores de 16 anos.",
            "Se casados, devem ser casados na Igreja Católica.",
            "Não podem ser pai ou mãe da criança."
          ],
          processo: [
            "1. Fazer a inscrição na secretaria.",
            "2. Participar do curso de preparação.",
            "3. Entregar os documentos na data estipulada.",
            "4. Celebrar o sacramento (Geralmente no 2º ou 4º Domingo)."
          ]
        },
        faq: [
          { p: "Pode batizar em outra paróquia?", r: "Sim, mas é necessária uma 'Transferência' assinada pelo padre da paróquia onde você mora." },
          { p: "Quanto custa?", r: "Os sacramentos são gratuitos (graça de Deus), porém pede-se uma taxa de contribuição para a manutenção da igreja e dos registros." },
          { p: "Posso ter apenas um padrinho?", r: "Sim, é permitido apenas um padrinho ou apenas uma madrinha, ou o casal." }
        ]
      }
    },
    {
      id: "eucaristia",
      title: "1ª Eucaristia",
      icon: <BookOpen size={40} />,
      color: "bg-parish-light text-parish-brown",
      accent: "border-parish-gold",
      shortDesc: "Recebimento do Corpo e Sangue de Cristo. Requer preparação através da catequese.",
      conteudo: {
        significado: {
          texto: "A Sagrada Eucaristia completa a iniciação cristã. Aqueles que foram elevados à dignidade do sacerdócio real pelo Batismo e configurados mais profundamente a Cristo pela Confirmação, participam, por meio da Eucaristia, com toda a comunidade, do próprio sacrifício do Senhor.",
          biblia: '"Eu sou o pão vivo que desceu do céu; se alguém comer deste pão, viverá para sempre." (João 6:51)',
          efeitos: ["União íntima com Cristo", "Separação do pecado", "Fortalecimento da caridade"]
        },
        requisitos: {
          documentos: [
            "Cópia da Lembrança do Batismo",
            "Ficha de inscrição da Catequese",
            "RG ou Certidão de Nascimento",
            "Taxa de inscrição da Catequese"
          ],
          regrasPadrinhos: [
            "Não há padrinhos na Primeira Eucaristia, apenas na Crisma.",
            "Os pais devem acompanhar as reuniões de pais durante o ano."
          ],
          processo: [
            "A preparação ocorre através da Catequese Infantil.",
            "Duração média: 2 a 3 anos (dependendo da idade).",
            "Inscrições: Geralmente em Fevereiro."
          ]
        },
        faq: [
          { p: "Qual a idade mínima?", r: "A criança deve estar alfabetizada, geralmente a partir dos 8 ou 9 anos." },
          { p: "Adultos podem fazer?", r: "Sim! Existe a catequese de adultos (Catecumenato) para quem não fez quando criança." }
        ]
      }
    },
    {
      id: "crisma",
      title: "Crisma",
      icon: <Flame size={40} />,
      color: "bg-red-100 text-parish-terracotta",
      accent: "border-parish-terracotta",
      shortDesc: "Confirmação da graça batismal e o selo do Espírito Santo para testemunhar a fé.",
      conteudo: {
        significado: {
          texto: "O sacramento da Confirmação (Crisma) enriquece os batizados com uma força especial do Espírito Santo. Assim, ficam mais estritamente vinculados à Igreja e mais obrigados a difundir e a defender a fé por palavras e obras, como verdadeiras testemunhas de Cristo.",
          biblia: '"Recebei o Espírito Santo." (João 20:22)',
          efeitos: ["Dons do Espírito Santo", "Caráter indelével (marca espiritual)", "Maturidade cristã"]
        },
        requisitos: {
          documentos: [
            "Comprovante de Batismo",
            "Comprovante de Primeira Eucaristia",
            "RG do crismando e do padrinho"
          ],
          regrasPadrinhos: [
            "Deve ser católico crismado (Obrigatório).",
            "Ter vida condizente com a fé (ex: se viver junto, ser casado na igreja).",
            "Ter no mínimo 16 anos."
          ],
          processo: [
            "Preparação dura cerca de 1 ano.",
            "Necessário 75% de frequência nos encontros.",
            "Realização de retiro espiritual antes da cerimônia."
          ]
        },
        faq: [
          { p: "Para que serve o Padrinho?", r: "Para orientar espiritualmente o crismando na vida adulta." },
          { p: "Se eu faltar muito?", r: "Será necessário refazer o ano de preparação." }
        ]
      }
    },
    {
      id: "matrimonio",
      title: "Matrimônio",
      icon: <Heart size={40} />,
      color: "bg-pink-100 text-pink-600",
      accent: "border-pink-400",
      shortDesc: "A união sagrada entre homem e mulher, sinal do amor de Cristo pela Igreja.",
      conteudo: {
        significado: {
          texto: "A aliança matrimonial, pela qual o homem e a mulher constituem entre si uma comunhão da vida toda, é ordenada por sua índole natural ao bem dos cônjuges e à procriação e educação da prole.",
          biblia: '"O que Deus uniu, o homem não separe." (Marcos 10:9)',
          efeitos: ["Unidade indissolúvel", "Graça para amar como Cristo amou"]
        },
        requisitos: {
          documentos: [
            "Certidão de Batismo Atualizada (Solicitar na paróquia onde foi batizado - Validade 6 meses)",
            "Comprovante do Curso de Noivos",
            "Processo Civil (Habilitação do Cartório)",
            "RG e comprovante de residência dos noivos",
            "Dados de 2 testemunhas (padrinhos)"
          ],
          regrasPadrinhos: [
            "Não precisam ser necessariamente casados na igreja (diferente do Batismo).",
            "Devem assinar a ata no dia."
          ],
          processo: [
            "1. Agendar na secretaria com NO MÍNIMO 6 meses de antecedência.",
            "2. Entrevista com o Padre (obrigatório).",
            "3. Proclamas (avisos) na igreja."
          ]
        },
        faq: [
          { p: "Pode casar fora da igreja (sítio)?", r: "Não. Na Diocese de São Paulo o sacramento deve ser realizado em local sagrado (Templo)." },
          { p: "Quanto custa?", r: "Existe uma taxa diocesana e paroquial que cobre a documentação, funcionários e manutenção." }
        ]
      }
    },
    {
        id: "confissao",
        title: "Confissão",
        icon: <Users size={40} />,
        color: "bg-purple-100 text-purple-600",
        accent: "border-purple-500",
        shortDesc: "Perdão dos pecados e reconciliação com Deus através do sacerdote.",
        conteudo: {
          significado: {
            texto: "Aqueles que se aproximam do sacramento da Penitência obtêm da misericórdia de Deus o perdão da ofensa a Ele feita e, ao mesmo tempo, reconciliam-se com a Igreja.",
            biblia: '"A quem perdoardes os pecados, lhes serão perdoados." (João 20:23)',
            efeitos: ["Paz de consciência", "Restituição da graça santificante"]
          },
          requisitos: {
            documentos: [
              "Nenhum documento físico é necessário.",
              "Apenas o Exame de Consciência."
            ],
            regrasPadrinhos: [
              "Não se aplica."
            ],
            processo: [
              "1. Exame de Consciência (Lembrar dos pecados).",
              "2. Contrição (Arrependimento sincero).",
              "3. Propósito (Vontade de não pecar mais).",
              "4. Confissão (Falar ao padre).",
              "5. Penitência (Cumprir o ato indicado)."
            ]
          },
          faq: [
            { p: "Quando tem atendimento?", r: "Terças, Quartas e Sextas (Verificar agenda)." },
            { p: "O padre pode contar meu pecado?", r: "Jamais. O sigilo sacramental é inviolável, sob pena de excomunhão." }
          ]
        }
      },
      {
        id: "uncao",
        title: "Unção dos Enfermos",
        icon: <AlertCircle size={40} />,
        color: "bg-green-100 text-green-600",
        accent: "border-green-500",
        shortDesc: "Graça de conforto, paz e coragem para vencer as dificuldades próprias do estado de doença grave.",
        conteudo: {
            significado: {
                texto: "Pela santa Unção dos Enfermos e pela oração dos presbíteros, a Igreja toda entrega os doentes ao Senhor sofredor e glorificado, para que os alivie e salve.",
                biblia: '"Alguém entre vós está doente? Mande chamar os presbíteros da Igreja..." (Tiago 5:14)',
                efeitos: ["União do doente à Paixão de Cristo", "Perdão dos pecados (se não puder confessar)"]
              },
            requisitos: {
              documentos: ["Solicitação feita por familiar."],
              regrasPadrinhos: ["Não se aplica."],
              processo: ["Ligar na secretaria com urgência.", "O padre vai até o hospital ou residência."]
            },
            faq: [
              { p: "É só para quem está morrendo?", r: "Não! É para qualquer doença grave ou idade avançada. Não espere o último momento." }
            ]
        }
      }
  ];

  // Componente interno para as Abas do Modal
  const ModalContent = ({ sacramento }) => {
    return (
        <div className="flex flex-col h-full">
            {/* Abas de Navegação */}
            <div className="flex border-b border-gray-200">
                <button onClick={() => setActiveTab('significado')} className={`px-6 py-4 font-bold uppercase text-xs md:text-sm tracking-wide transition-all ${activeTab === 'significado' ? 'border-b-4 border-parish-terracotta text-parish-terracotta bg-red-50' : 'text-gray-400 hover:text-parish-dark'}`}>O que é</button>
                <button onClick={() => setActiveTab('requisitos')} className={`px-6 py-4 font-bold uppercase text-xs md:text-sm tracking-wide transition-all ${activeTab === 'requisitos' ? 'border-b-4 border-parish-terracotta text-parish-terracotta bg-red-50' : 'text-gray-400 hover:text-parish-dark'}`}>Requisitos</button>
                <button onClick={() => setActiveTab('faq')} className={`px-6 py-4 font-bold uppercase text-xs md:text-sm tracking-wide transition-all ${activeTab === 'faq' ? 'border-b-4 border-parish-terracotta text-parish-terracotta bg-red-50' : 'text-gray-400 hover:text-parish-dark'}`}>Dúvidas</button>
            </div>

            {/* Conteúdo com Scroll */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 scrollbar-thin scrollbar-thumb-gray-300">
                
                {/* --- ABA SIGNIFICADO --- */}
                {activeTab === 'significado' && (
                    <div className="space-y-6 animate-fadeIn">
                        <div className="bg-parish-light/20 p-6 rounded-xl border-l-4 border-parish-gold">
                            <h3 className="text-xl font-serif font-bold text-parish-brown mb-2">Definição</h3>
                            <p className="text-gray-700 leading-relaxed text-justify">{sacramento.conteudo.significado.texto}</p>
                        </div>
                        <div>
                             <h4 className="flex items-center gap-2 font-bold text-parish-dark uppercase text-sm mb-3">
                                <Info size={18}/> Fundamentação Bíblica
                             </h4>
                             <p className="italic text-gray-600 bg-gray-50 p-4 rounded-lg font-serif border border-gray-200">
                                {sacramento.conteudo.significado.biblia}
                             </p>
                        </div>
                        <div>
                             <h4 className="font-bold text-parish-dark uppercase text-sm mb-3">Graças e Efeitos</h4>
                             <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                 {sacramento.conteudo.significado.efeitos.map((ef, i) => (
                                     <li key={i} className="bg-white border border-gray-100 shadow-sm p-3 rounded-lg flex items-center gap-2 text-sm text-gray-700">
                                         <CheckCircle size={16} className="text-green-500 shrink-0"/> {ef}
                                     </li>
                                 ))}
                             </ul>
                        </div>
                    </div>
                )}

                {/* --- ABA REQUISITOS --- */}
                {activeTab === 'requisitos' && (
                    <div className="space-y-8 animate-fadeIn">
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="flex items-center gap-2 font-bold text-parish-dark uppercase text-sm mb-4 border-b border-gray-100 pb-2">
                                    <FileText size={18} className="text-parish-terracotta"/> Documentação
                                </h4>
                                <ul className="space-y-3">
                                    {sacramento.conteudo.requisitos.documentos.map((doc, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5"></div>
                                            {doc}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="flex items-center gap-2 font-bold text-parish-dark uppercase text-sm mb-4 border-b border-gray-100 pb-2">
                                    <Users size={18} className="text-parish-terracotta"/> Padrinhos
                                </h4>
                                <ul className="space-y-3">
                                    {sacramento.conteudo.requisitos.regrasPadrinhos.map((regra, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                            <div className="w-1.5 h-1.5 bg-parish-terracotta rounded-full mt-1.5"></div>
                                            {regra}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                             <h4 className="font-bold text-parish-dark uppercase text-sm mb-4">Etapas do Processo</h4>
                             <div className="space-y-3">
                                 {sacramento.conteudo.requisitos.processo.map((passo, i) => (
                                     <div key={i} className="flex items-center gap-4">
                                         <div className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center font-bold text-parish-gold shadow-sm shrink-0">
                                            {i + 1}
                                         </div>
                                         <p className="text-sm font-medium text-gray-700">{passo}</p>
                                     </div>
                                 ))}
                             </div>
                        </div>

                    </div>
                )}

                {/* --- ABA FAQ --- */}
                {activeTab === 'faq' && (
                    <div className="space-y-4 animate-fadeIn">
                        {sacramento.conteudo.faq.map((item, i) => (
                            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                                <div className="bg-gray-50 p-4 font-bold text-parish-dark text-sm flex gap-3 items-center">
                                    <HelpCircle size={18} className="text-parish-gold"/>
                                    {item.p}
                                </div>
                                <div className="p-4 bg-white text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                                    {item.r}
                                </div>
                            </div>
                        ))}

                        <div className="mt-8 bg-blue-50 p-4 rounded-lg flex gap-3 text-blue-800 text-xs items-center">
                            <Info size={24} />
                            <p>
                                Casos especiais ou dúvidas não listadas devem ser conversadas diretamente na Secretaria Paroquial. 
                                O padre está disponível para orientar em situações canônicas complexas.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      
      {/* HEADER DA PÁGINA */}
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-parish-dark">Vida Sacramental</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Sinais visíveis da graça invisível. Clique nos cards abaixo para ter acesso a toda a documentação, teologia e requisitos de cada sacramento.
        </p>
        <div className="mt-6 h-1 w-20 bg-parish-terracotta rounded mx-auto md:mx-0"></div>
      </div>

      {/* GRID DE CARDS (ENTRY POINT) */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sacramentos.map((item) => (
            <div 
              key={item.id}
              onClick={() => { setSelectedItem(item); setActiveTab('significado'); }}
              className={`bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer group overflow-hidden relative`}
            >
               {/* Faixa decorativa no topo */}
               <div className={`h-2 w-full ${item.color.split(" ")[0]}`}></div>
               
               <div className="p-8">
                   <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${item.color}`}>
                       {item.icon}
                   </div>
                   <h2 className="text-2xl font-serif font-bold text-parish-dark mb-3 group-hover:text-parish-terracotta transition-colors">
                       {item.title}
                   </h2>
                   <p className="text-gray-500 text-sm leading-relaxed mb-6">
                       {item.shortDesc}
                   </p>
                   <span className="text-xs font-bold uppercase tracking-wider text-parish-terracotta border-b-2 border-transparent group-hover:border-parish-terracotta transition-all">
                       Ver Detalhes Completos
                   </span>
               </div>
            </div>
        ))}
      </div>

      {/* --- O MODAL DETALHADO --- */}
      {selectedItem && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            
            {/* Overlay Escuro */}
            <div className="absolute inset-0 bg-parish-dark/80 backdrop-blur-sm" onClick={() => setSelectedItem(null)}></div>
            
            {/* Caixa do Modal */}
            <div className="relative bg-white w-full max-w-4xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scaleIn">
                
                {/* Header do Modal */}
                <div className="bg-parish-dark text-white p-6 md:p-8 flex justify-between items-start shrink-0">
                    <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg bg-white/10`}>
                             {React.cloneElement(selectedItem.icon, { size: 32, className: 'text-white' })}
                        </div>
                        <div>
                            <span className="block text-parish-gold text-xs font-bold uppercase tracking-wider mb-1">Guia Completo</span>
                            <h2 className="text-3xl font-serif font-bold leading-none">{selectedItem.title}</h2>
                        </div>
                    </div>
                    <button onClick={() => setSelectedItem(null)} className="text-white/50 hover:text-white transition-colors">
                        <X size={32} />
                    </button>
                </div>

                {/* Corpo do Modal (Componente Interno) */}
                <ModalContent sacramento={selectedItem} />

            </div>
        </div>
      )}

    </div>
  );
};

export default Sacramentos;