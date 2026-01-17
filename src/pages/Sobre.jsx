import React from 'react';
// Imagens (Use placeholders ou importe as fotos reais se tiver)
import historyBg from '../assets/images/hero-bg.jpg'; 
import imgAilton from '../assets/clero/imgAilton.jpeg'; // Substitua por foto real
import imgElinaldo from '../assets/clero/imgElinaldo.jpeg'; // Substitua por foto real
import imgMarcel from '../assets/clero/imgMarcel.jpeg'; // Substitua por foto real

const Sobre = () => {
  const clero = [
    {
      nome: "Pe. Ailton R. Damasceno, MSC",
      cargo: "Pároco",
      img: imgAilton,
      msg: "Conduzindo o rebanho com amor e a proteção de São Miguel."
    },
    {
      nome: "Pe. Elinaldo C. Assunção, MSC",
      cargo: "Vigário Paroquial",
      img: imgElinaldo,
      msg: "Auxiliando na missão de evangelizar e servir ao altar do Senhor."
    },
    {
      nome: "Diác. Marcel Alves Martins",
      cargo: "Diácono Permanente",
      img: imgMarcel,
      msg: "Serviço à caridade, à palavra e à liturgia em nossa comunidade."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f1ea] pt-24 md:pt-32 pb-20 overflow-x-hidden">
      
      {/* --- SEÇÃO 1: HISTÓRIA --- */}
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-16 grid md:grid-cols-2 gap-12 items-center">
        
        <div className="order-2 md:order-1 relative px-4 md:px-0">
           <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-parish-gold -mt-4 -ml-2 md:-ml-6 pointer-events-none"></div>
           <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-parish-gold -mb-4 -mr-2 md:-mr-6 pointer-events-none"></div>
           <div className="rounded-lg overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
             <img src={historyBg} alt="História da Paróquia" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
           </div>
        </div>
        
        <div className="order-1 md:order-2 space-y-6 text-center md:text-left">
          <span className="text-parish-terracotta font-bold tracking-widest uppercase text-xs">Nossa História</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-parish-dark leading-tight">
            Uma comunidade de <span className="text-parish-gold">fé e tradição</span>
          </h1>
          <div className="space-y-4 text-gray-600 text-sm md:text-lg leading-relaxed text-justify">
            <p>A <strong>Paróquia São Miguel Arcanjo</strong> foi fundada oficialmente em <strong>27 de junho de 2006</strong>. Nasceu do sonho e da fé das famílias desta região.</p>
            <p>Hoje, pertencente à <strong>Região Episcopal Belém</strong>, somos uma grande família formada por 8 comunidades vivas no Jardim da Conquista.</p>
            <p>Sob a espada e a proteção de São Miguel, "Quem como Deus?", seguimos nossa missão de evangelizar e acolher a todos.</p>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 2: NOSSO CLERO (Atualizado com os 3) --- */}
      <section className="bg-white/60 py-20 mt-10 border-y border-white/50">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-12">
             <span className="text-parish-gold font-bold tracking-widest uppercase text-xs">Pastores do Rebanho</span>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-parish-brown mt-2">Nosso Clero</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clero.map((pessoa, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl shadow-xl border border-[#e5e0d8] flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-40 h-40 flex-shrink-0 bg-gray-100 rounded-full overflow-hidden border-4 border-parish-gold mb-6 shadow-md">
                        <img src={pessoa.img} alt={pessoa.nome} className="w-full h-full object-cover" /> 
                    </div>
                    <h3 className="text-xl font-bold text-parish-dark font-serif mb-2">{pessoa.nome}</h3>
                    <p className="text-white bg-parish-terracotta text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                        {pessoa.cargo}
                    </p>
                    <p className="text-gray-500 text-sm italic leading-relaxed">"{pessoa.msg}"</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- SEÇÃO 3: FRASE FINAL --- */}
      <section className="bg-parish-dark text-white py-24 text-center mt-20 relative overflow-hidden">    
         <div className="max-w-5xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif italic font-light leading-relaxed opacity-90">
              "Quem como Deus? 
              <br /> Ninguém como Deus!"
            </h2>
            <div className="w-80 h-1 bg-parish-gold mx-auto mt-8 rounded-full"></div>
         </div>
      </section>

    </div>
  );
};

export default Sobre;