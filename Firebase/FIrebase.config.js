// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKUGTuRSCt5DX7BGBN1zu1mUbiuFRduTg",
  authDomain: "the-news-dragon-695ab.firebaseapp.com",
  projectId: "the-news-dragon-695ab",
  storageBucket: "the-news-dragon-695ab.appspot.com",
  messagingSenderId: "839253176554",
  appId: "1:839253176554:web:a27baf1f2e42aeb41a2793"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export default app