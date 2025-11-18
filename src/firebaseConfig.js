import { initializeApp } from 'firebase/app';
import { getAuth, signInWithCustomToken, signInAnonymously } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// --- Firebase Initialization ---
// Aa global variables environment dwara provide karvama aave chhe.
const firebaseConfig = JSON.parse(
  typeof __firebase_config !== 'undefined' 
    ? __firebase_config 
    : '{"apiKey": "AIzaSyB2OvCJr4mMycR78dUrGvcnnSJoZkZ2zUc","authDomain": "real-1bae5.firebaseapp.com","projectId": "real-1bae5","storageBucket": "real-1bae5.firebasestorage.app","messagingSenderId": "714881136402","appId": "1:714881136402:web:6591222d658f6d1e28a5cb","measurementId": "G-JRGLM51MBE"}'
);

export const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

let app;
let auth;
let db;

// Firebase ne initialize karo
if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY") {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
} else {
  console.warn("Firebase config is missing or invalid.");
}

// Initial auth token ne handle karo
const authUser = async () => {
  if (!auth) return;
  try {
    if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
      await signInWithCustomToken(auth, __initial_auth_token);
    } else if (!auth.currentUser) {
      await signInAnonymously(auth);
    }
  } catch (error)
  {
    console.error("Error during initial sign-in:", error);
  }
};

// Immediately try to authenticate
if (auth) {
  authUser();
}

export { auth, db };