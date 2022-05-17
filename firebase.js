import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUoNytkquNZJP-PDFZgiUTqrgngofr4Pc",
  authDomain: "clone-f9c1c.firebaseapp.com",
  projectId: "clone-f9c1c",
  storageBucket: "clone-f9c1c.appspot.com",
  messagingSenderId: "948187261033",
  appId: "1:948187261033:web:1f01092483e9b07a55daf8",
  measurementId: "G-NBC8H5KRMX",
};
firebase.initializeApp(firebaseConfig);
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, firebase };
