import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAHlamAb-e9paVxMJIZwKGgAe6he4UZ0qQ",
    authDomain: "whatsgood-45c74.firebaseapp.com",
    projectId: "whatsgood-45c74",
    storageBucket: "whatsgood-45c74.appspot.com",
    messagingSenderId: "406404086806",
    appId: "1:406404086806:web:037197039b17c8ddaa0937",
    measurementId: "G-W3BQW822MW"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  
  export default db;