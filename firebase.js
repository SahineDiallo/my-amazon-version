import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPdGnqBKuOMTCDg5gSZenEHkAIWOaqISA",
  authDomain: "project-clones.firebaseapp.com",
  projectId: "project-clones",
  storageBucket: "project-clones.appspot.com",
  messagingSenderId: "491481318150",
  appId: "1:491481318150:web:08878efc5c2b20f6e3d487",
};
firebase.initializeApp(firebaseConfig);
const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, firebase, db };
