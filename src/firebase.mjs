import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2VXOjN4OrmUPezp25IurK7Bsq5ew8i-E",
  authDomain: "chat-app-83669.firebaseapp.com",
  projectId: "chat-app-83669",
  storageBucket: "chat-app-83669.appspot.com",
  messagingSenderId: "256210012343",
  appId: "1:256210012343:web:e409ceadc76fe90cdf2532"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}