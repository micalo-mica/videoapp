import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNNpBMxypeUSa-La3DpvQiNe1X4Bk2IfQ",
  authDomain: "video-8f629.firebaseapp.com",
  projectId: "video-8f629",
  storageBucket: "video-8f629.appspot.com",
  messagingSenderId: "1095366845164",
  appId: "1:1095366845164:web:6f18c79ff75667a9ed7bc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
