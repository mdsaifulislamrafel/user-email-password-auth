// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBo_EbES4KeLXwIY0PgnuYlH4V4VQJ8kQ",
  authDomain: "user-email-password-auth-13954.firebaseapp.com",
  projectId: "user-email-password-auth-13954",
  storageBucket: "user-email-password-auth-13954.appspot.com",
  messagingSenderId: "941904787752",
  appId: "1:941904787752:web:4bbf0f311b79eb37db381d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;