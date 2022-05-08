import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFZswEHUMrMl5vDO46sTJoW3GagQpmCMs",
  authDomain: "slack-clone-sajc.firebaseapp.com",
  projectId: "slack-clone-sajc",
  storageBucket: "slack-clone-sajc.appspot.com",
  messagingSenderId: "23866011150",
  appId: "1:23866011150:web:261ab5368fa20a6624165f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { db, auth, provider };
