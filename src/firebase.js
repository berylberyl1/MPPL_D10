// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcs62dHhaM3OpXgTe8PZncv3Smi62Ve0Y",
  authDomain: "mppl-d10.firebaseapp.com",
  projectId: "mppl-d10",
  storageBucket: "mppl-d10.appspot.com",
  messagingSenderId: "637106919363",
  appId: "1:637106919363:web:9908647a714d7859120f76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export default db;
export { auth };
