import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDIUMlncmjs0vqo3SfC9rlWRLzuVTd4W-I",
  authDomain: "pdmhito.firebaseapp.com",
  databaseURL: "https://pdmhito.firebaseio.com",
  projectId: "pdmhito",
  storageBucket: "pdmhito.appspot.com",
  messagingSenderId: "561905216797",
  appId: "1:561905216797:web:613c3ab5c812dd0fd505f4"
};

  
export const firebaseApp= firebase.initializeApp(firebaseConfig);