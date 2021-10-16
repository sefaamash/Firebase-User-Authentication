import firebase from "firebase/app"

import 'firebase/auth'
const app=firebase.initializeApp({
  apiKey: "AIzaSyBctWEWq6s3KjtNuR9VXGQMR-IA7TqHBQQ",
  authDomain: "fire-auth-10cfe.firebaseapp.com",
  projectId: "fire-auth-10cfe",
  storageBucket: "fire-auth-10cfe.appspot.com",
  messagingSenderId: "967457193640",
  appId: "1:967457193640:web:bdce6eab1aa607c1d48c9d",
  measurementId: "G-FKNE0SRKPW"
  
});

export const auth = app.auth()
export default app


