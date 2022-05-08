// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGAsgTrt17Qvksuav7MO-b0hvLooug_Yo",
  authDomain: "laptop-warehouse-4dc3b.firebaseapp.com",
  projectId: "laptop-warehouse-4dc3b",
  storageBucket: "laptop-warehouse-4dc3b.appspot.com",
  messagingSenderId: "798752322978",
  appId: "1:798752322978:web:1ea679aec2b6740840aefb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;