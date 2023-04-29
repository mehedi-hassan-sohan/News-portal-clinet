// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 console.log('environment variable', import.meta.env.VITE_apiKey)

const firebaseConfig = {
  authDomain:import.meta.env.VITE_authDomain,
  apiKey: import.meta.env.VITE_apiKey,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.storageBucket,
  messagingSenderId: import.meta.env.messagingSenderId,
  appId: import.meta.env.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export default app