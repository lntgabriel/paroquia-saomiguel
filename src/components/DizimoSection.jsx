import React, { useState } from 'react';
import { HeartHandshake, QrCode } from 'lucide-react';
import ModalDizimo from './ModalDizimo'; // Importamos o modal

const DizimoSection = () => {
  // Estado para controlar se o modal está aberto ou fechado
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id="dizimo" className="py-20 bg-parish-light relative overflow-hidden">
        {/* Decoração */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-parish-beige opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-parish-gold opacity-20 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Lado Esquerdo */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-parish-terracotta/10 text-parish-terracotta rounded-full text-sm font-semibold uppercase tracking-wider">
                <HeartHandshake size={18} />
                <span>Devolução Consciente</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-parish-dark leading-tight">
                O Dízimo é um gesto de <br />
                <span className="text-parish-gold relative">Amor e Gratidão</span>
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Dizimista é aquele que experimenta a fidelidade de Deus e retribui com generosidade. 
                Sua contribuição ajuda a manter a igreja, a evangelização e as obras sociais.
              </p>
            </div>

            {/* Lado Direito */}
            <div className="w-full md:w-1/2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-parish-beige">
                <h3 className="text-xl font-bold text-center text-parish-dark mb-6">
                  Como devolver seu dízimo?
                </h3>

                <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl border border-dashed border-gray-300 mb-6">
                  <QrCode size={48} className="text-parish-dark mb-4" />
                  <span className="text-sm text-gray-500 uppercase font-bold tracking-wide mb-2">Chave Pix (CNPJ)</span>
                  <p className="text-2xl font-mono text-parish-terracotta font-bold select-all cursor-pointer">
                    00.000.000/0001-00
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* ESSE BOTÃO AGORA ABRE O MODAL */}
                  <button 
                    onClick={() => setShowModal(true)}
                    className="w-full py-3 bg-parish-dark text-white rounded-lg font-semibold hover:bg-black transition-colors"
                  >
                    Ser Dizimista
                  </button>
                  <button className="w-full py-3 border border-parish-dark text-parish-dark rounded-lg font-semibold hover:bg-parish-light transition-colors">
                    Falar no Whatsapp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renderizamos o Modal aqui, ele fica escondido até o showModal ser true */}
      <ModalDizimo isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default DizimoSection;