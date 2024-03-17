// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA4OlD3Uow5Z8yzB6m0tS2DoE_XK-IVXw",
  authDomain: "newluckytraders-92f88.firebaseapp.com",
  databaseURL: "https://newluckytraders-92f88-default-rtdb.firebaseio.com",
  projectId: "newluckytraders-92f88",
  storageBucket: "newluckytraders-92f88.appspot.com",
  messagingSenderId: "57155295865",
  appId: "1:57155295865:web:68521b65d3275964dc92a8",
  measurementId: "G-6EV1DFBNSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: "name",
      email: "email",
      profile_picture : "imageUrl"
    });
  }
  writeUserData(123,"uhuj","ghjl","gh");