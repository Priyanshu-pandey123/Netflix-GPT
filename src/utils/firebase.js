

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ6-0tLgMzZrYGoOPpEDkJd2O_DoVh5tM",
  authDomain: "priyanshu-netflixgpt.firebaseapp.com",
  projectId: "priyanshu-netflixgpt",
  storageBucket: "priyanshu-netflixgpt.appspot.com",
  messagingSenderId: "361524427225",
  appId: "1:361524427225:web:99246718895473318e41c8",
  measurementId: "G-FLCB9YC7D0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);