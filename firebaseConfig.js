// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDadHHPswONNPoTAlrV4zwQP6yu3ThSJh4",
  authDomain: "trying-fa97d.firebaseapp.com",
  projectId: "trying-fa97d",
  storageBucket: "trying-fa97d.appspot.com",
  messagingSenderId: "576839939550",
  appId: "1:576839939550:web:fbff2c1f8dcee502fb194f",
  measurementId: "G-QPRX1YFJFM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
