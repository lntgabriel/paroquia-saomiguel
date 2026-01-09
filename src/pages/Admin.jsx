import React, { useState, useEffect } from 'react';
import { db } from '../services/firebaseConnection';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { Lock, LogIn, Trash2, MessageCircle, CheckCircle } from 'lucide-react';

const Admin = () => {
  // Estados para controlar a tela
  const [senha, setSenha] = useState('');
  const [logado, setLogado] = useState(false);
  const [loading, setLoading] = useState(true);
  const [lista, setLista] = useState([]);

  // Senha fixa para acesso (Depois vc muda se quiser)
  const SENHA_MESTRA = "miguel2024";

  // Função para carregar os dados do Banco
  async function carregarDados() {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "interessados_dizimo"));
      const listaTemporaria = [];

      querySnapshot.forEach((doc) => {
        listaTemporaria.push({
          id: doc.id,
          ...doc.data()
        });
      });

      setLista(listaTemporaria);
    } catch (error) {
      console.log("Erro ao buscar:", error);
    } finally {
      setLoading(false);
    }
  }

  // Se a pessoa acertar a senha, libera e carrega os dados
  const handleLogin = (e) => {
    e.preventDefault();
    if (senha === SENHA_MESTRA) {
      setLogado(true);
      carregarDados();
    } else {
      alert("Senha incorreta!");
    }
  };

  // Função para Excluir alguém da lista
  async function handleExcluir(id) {
    if(window.confirm("Tem certeza que deseja excluir este registro?")) {
        await deleteDoc(doc(db, "interessados_dizimo", id));
        carregarDados(); // Recarrega a lista
    }
  }

  // Formatar data (o firebase manda um formato estranho)
  const formatarData = (timestamp) => {
    if(!timestamp) return "-";
    // Converte timestamp do firestore para data JS
    const date = timestamp.toDate(); 
    return date.toLocaleDateString('pt-BR') + ' às ' + date.toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'});
  }

  // --- TELA DE LOGIN (Se não estiver logado) ---
  if (!logado) {
    return (
      <div className="min-h-screen bg-parish-dark flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center">
          <div className="w-16 h-16 bg-parish-light rounded-full flex items-center justify-center mx-auto mb-6 text-parish-dark">
             <Lock size={32} />
          </div>
          <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">Área Restrita</h2>
          <p className="text-gray-500 text-sm mb-6">Acesso exclusivo para Secretaria e Pastoral</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Digite a senha de acesso"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-parish-gold text-center tracking-widest"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button className="w-full bg-parish-gold hover:bg-parish-brown text-white font-bold py-3 rounded-lg flex justify-center items-center gap-2 transition-all">
              <LogIn size={20} /> Acessar Sistema
            </button>
          </form>
          <a href="/" className="block mt-6 text-xs text-gray-400 hover:text-gray-600">Voltar para o site</a>
        </div>
      </div>
    );
  }

// --- TELA DO PAINEL (Se acertou a senha) ---
  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-32">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho do Admin */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold text-parish-dark">Painel do Dízimo</h1>
            <p className="text-gray-500">Gerencie os novos cadastros vindos do site.</p>
          </div>
          <button 
             onClick={carregarDados}
             className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 text-sm font-semibold"
          >
            Atualizar Lista
          </button>
        </div>

        {/* A Tabela */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-parish-light text-parish-brown uppercase text-xs font-bold tracking-wider">
                <tr>
                  <th className="p-4 border-b">Data</th>
                  <th className="p-4 border-b">Nome do Fiel</th>
                  <th className="p-4 border-b">Telefone</th>
                  <th className="p-4 border-b text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {lista.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-sm text-gray-500 font-mono">
                      {formatarData(item.data)}
                    </td>
                    <td className="p-4 font-bold text-parish-dark">
                      {item.nome}
                    </td>
                    <td className="p-4 text-gray-700">
                      {item.telefone}
                    </td>
                    <td className="p-4 flex justify-center gap-3">
                      {/* Botão de WhatsApp Automático */}
                      <a 
                        href={`https://wa.me/55${item.telefone.replace(/\D/g, '')}?text=Olá ${item.nome}, somos da Paróquia São Miguel! Vimos seu interesse no Dízimo.`}
                        target="_blank"
                        className="p-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-600 hover:text-white transition-colors title='Chamar no Zap'"
                      >
                        <MessageCircle size={18} />
                      </a>
                      
                      {/* Botão Excluir */}
                      <button 
                        onClick={() => handleExcluir(item.id)}
                        className="p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
                        title="Excluir Registro"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Se a lista estiver vazia */}
          {lista.length === 0 && !loading && (
             <div className="p-12 text-center text-gray-400">
               Nenhum cadastro encontrado por enquanto.
             </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Admin;