import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBc2W7JvsV1TaULvhZ-3NVNqa3-1SYGxao",
  authDomain: "kanufamilyweb.firebaseapp.com",
  projectId: "kanufamilyweb",
  storageBucket: "kanufamilyweb.appspot.com",
  messagingSenderId: "1067399805823",
  appId: "1:1067399805823:web:e936f2cb293007c8f8384a",
  measurementId: "G-49BPFZ7J0L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);