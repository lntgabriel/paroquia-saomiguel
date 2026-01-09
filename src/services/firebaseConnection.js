import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// SUBSTITUA COM OS DADOS QUE O FIREBASE TE DEU NA TELA
const firebaseConfig = {
  apiKey: "AIzaSyCg6oDTD0aU3qJNaN7u_xPL824qmnnvgtw",
  authDomain: "saomiguel-fd03c.firebaseapp.com",
  projectId: "saomiguel-fd03c",
  storageBucket: "saomiguel-fd03c.firebasestorage.app",
  messagingSenderId: "493060329764",
  appId: "1:493060329764:web:87d42f2e40170d454623b1",
  measurementId: "G-YTQMVFD3YS"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };