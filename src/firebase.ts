import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNlJfONPsgibX3LnUhMBcRAyGoqqlK0oo",
  authDomain: "ai-steganography-detection.firebaseapp.com",
  projectId: "ai-steganography-detection",
  storageBucket: "ai-steganography-detection.firebasestorage.app",
  messagingSenderId: "937903261767",
  appId: "1:937903261767:web:81c07a68907a2eaf1a8962",
  measurementId: "G-RKK5GQ8MXL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);