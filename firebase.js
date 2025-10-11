// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCfaMdIUy3fQTeO8r77Cp3eosKEXLV4oxg",
  authDomain: "mikeminh-5f981.firebaseapp.com",
  projectId: "mikeminh-5f981",
  storageBucket: "mikeminh-5f981.appspot.com",
  messagingSenderId: "1064220392351",
  appId: "1:1064220392351:web:8cdaf47c27cce3c7571baa",
  measurementId: "G-NQG18TS12Q"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
