// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz1V_chBsqS8GivdQkhJuttw0fodXji-E",
  authDomain: "nsbgram.firebaseapp.com",
  projectId: "nsbgram",
  storageBucket: "nsbgram.appspot.com",
  messagingSenderId: "1056564196629",
  appId: "1:1056564196629:web:39eb2f248bbafdd66ba51c",
  measurementId: "G-79QZPSCCMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;