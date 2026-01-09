import React, { useState } from 'react';
import { X, HeartHandshake } from 'lucide-react';
import { db } from '../services/firebaseConnection';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ModalDizimo = ({ isOpen, onClose }) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleCadastro = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Salva no Banco de Dados na coleção "interessados_dizimo"
      await addDoc(collection(db, "interessados_dizimo"), {
        nome: nome,
        telefone: telefone,
        data: serverTimestamp(), // Data e hora atual
        status: "novo"
      });

      alert("Que benção! Seus dados foram enviados. A pastoral entrará em contato.");
      setNome('');
      setTelefone('');
      onClose(); // Fecha o modal
    } catch (error) {
      console.log(error);
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      {/* Fundo escuro atrás do modal */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* O Modal em si */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 md:p-8 animate-[bounce_0.2s_ease-out]">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-red-500">
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <div className="bg-parish-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-parish-brown">
             <HeartHandshake size={32} />
          </div>
          <h3 className="text-2xl font-serif font-bold text-parish-dark">Seja Dizimista</h3>
          <p className="text-gray-500 text-sm mt-2">
            Deixe seu contato. A equipe da pastoral falará com você para explicar como funciona.
          </p>
        </div>

        <form onSubmit={handleCadastro} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Nome Completo</label>
            <input 
              type="text" 
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:border-parish-gold focus:ring-1 focus:ring-parish-gold outline-none transition-all"
              placeholder="Ex: Maria da Silva"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Telefone / WhatsApp</label>
            <input 
              type="tel" 
              required
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:border-parish-gold focus:ring-1 focus:ring-parish-gold outline-none transition-all"
              placeholder="(11) 99999-9999"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-parish-dark text-white font-bold py-4 rounded-xl hover:bg-black transition-transform active:scale-95 disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Quero Participar"}
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-4">
          Seus dados estão seguros com a secretaria paroquial.
        </p>
      </div>
    </div>
  );
};

export default ModalDizimo;