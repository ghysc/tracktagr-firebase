// https://console.firebase.google.com/project/tracktagr/overview
/* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, onAuthStateChanged, getRedirectResult } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNtU8XGgzsmwM48MHQ0H1k317MbaOl0W4",
  authDomain: "tracktagr.firebaseapp.com",
  projectId: "tracktagr",
  storageBucket: "tracktagr.appspot.com",
  messagingSenderId: "461529816149",
  appId: "1:461529816149:web:5b692610f1878eb753c8dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);