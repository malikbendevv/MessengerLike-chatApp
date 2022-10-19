import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsADXrNgnj8-hi7zSwFZBEP-C2KA2Vs0w",
  authDomain: "uni-chat-c14b3.firebaseapp.com",
  projectId: "uni-chat-c14b3",
  storageBucket: "uni-chat-c14b3.appspot.com",
  messagingSenderId: "396739406180",
  appId: "1:396739406180:web:7463b353ab7aaa97223271",
  measurementId: "G-GXLG44GBB9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

const analytics = getAnalytics(app);
