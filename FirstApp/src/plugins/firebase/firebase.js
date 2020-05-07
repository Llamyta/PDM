import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyADL9eItqcOC4-mqR3yoQXGA5CEpvpXV8Y",
  authDomain: "donarsangre-bf5c7.firebaseapp.com",
  databaseURL: "https://donarsangre-bf5c7.firebaseio.com",
  projectId: "donarsangre-bf5c7",
  storageBucket: "donarsangre-bf5c7.appspot.com",
  messagingSenderId: "686268730527",
  appId: "1:686268730527:web:509f5c7d562e464877a6aa",
  measurementId: "G-YT1NY0Z454"
};

  
export const firebaseApp= firebase.initializeApp(firebaseConfig);