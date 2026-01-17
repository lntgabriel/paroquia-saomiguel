import React, { useState } from 'react';
import { BookOpen, Star, ChevronDown, ChevronUp } from 'lucide-react';

const Oracoes = () => {
  const [aberta, setAberta] = useState(0); // Qual oração está aberta (0 = Primeira)

  const oracoes = [
    {
      titulo: "Oração a São Miguel Arcanjo",
      sub: "Pequeno Exorcismo de Leão XIII",
      destaque: true,
      texto: `São Miguel Arcanjo, defendei-nos no combate, sede o nosso refúgio contra as maldades e ciladas do demônio. 
      Ordene-lhe Deus, instantemente o pedimos, e vós, príncipe da milícia celeste, pela virtude divina, precipitai no inferno a satanás e aos outros espíritos malignos, que andam pelo mundo para perder as almas. Amém.`
    },
    {
      titulo: "Sinal da Cruz",
      texto: `Em nome do Pai, e do Filho e do Espírito Santo. Amém.`
    },
    {
      titulo: "Pai Nosso",
      texto: `Pai Nosso que estais nos Céus, santificado seja o vosso Nome, venha a nós o vosso Reino, seja feita a vossa vontade assim na terra como no Céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do Mal. Amém.`
    },
    {
      titulo: "Ave Maria",
      texto: `Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora de nossa morte. Amém.`
    },
    {
      titulo: "Salve Rainha",
      texto: `Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei, e depois deste desterro mostrai-nos Jesus, bendito fruto do vosso ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, Santa Mãe de Deus. Para que sejamos dignos das promessas de Cristo. Amém.`
    },
    {
      titulo: "Credo (Símbolo dos Apóstolos)",
      texto: `Creio em Deus Pai Todo-Poderoso, Criador do céu e da terra. E em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado. Desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus; está sentado à direita de Deus Pai todo-poderoso, de onde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo; na Santa Igreja Católica; na comunhão dos santos; na remissão dos pecados; na ressurreição da carne; na vida eterna. Amém.`
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f1ea] pt-24 md:pt-32 pb-32 md:pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Cabeçalho */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-parish-gold bg-parish-light/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3 shadow-sm bg-white">
             <Star size={14} />
             <span>Espiritualidade</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-parish-dark">
            Orações do Cristão
          </h1>
          <p className="mt-3 text-gray-500 italic max-w-lg mx-auto">
            "A oração é a chave que abre o coração de Deus."
          </p>
        </div>

        {/* Lista de Orações */}
        <div className="space-y-4">
          {oracoes.map((item, index) => {
            const isOpen = aberta === index;
            
            return (
              <div 
                key={index}
                onClick={() => setAberta(isOpen ? -1 : index)}
                className={`bg-white rounded-2xl border transition-all cursor-pointer overflow-hidden ${isOpen ? 'shadow-xl ring-2 ring-parish-gold/20 border-parish-gold/50' : 'shadow-sm hover:shadow-md border-transparent'}`}
              >
                {/* Título da Oração */}
                <div className={`p-5 flex items-center justify-between ${item.destaque ? 'bg-parish-terracotta/5' : ''}`}>
                   <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.destaque ? 'bg-parish-terracotta text-white' : 'bg-gray-100 text-parish-gold'}`}>
                         {item.destaque ? <Star size={20}/> : <BookOpen size={20}/>}
                      </div>
                      <div>
                         <h3 className={`font-serif font-bold text-lg leading-tight ${item.destaque ? 'text-parish-terracotta' : 'text-parish-dark'}`}>
                            {item.titulo}
                         </h3>
                         {item.sub && <p className="text-xs text-gray-500 uppercase tracking-wide mt-0.5">{item.sub}</p>}
                      </div>
                   </div>
                   {isOpen ? <ChevronUp className="text-gray-400"/> : <ChevronDown className="text-gray-400"/>}
                </div>

                {/* Texto da Oração */}
                <div 
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}
                >
                   <div className="p-6 pt-0 text-gray-700 leading-relaxed font-serif text-lg md:text-xl text-justify border-t border-dashed border-gray-100 mt-2">
                      {item.texto}
                   </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Oracoes;