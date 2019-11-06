import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCtGXeDkuDpmbCXq3ACcGKB6lLFsvm2Sio",
    authDomain: "clothing-ecomm-db.firebaseapp.com",
    databaseURL: "https://clothing-ecomm-db.firebaseio.com",
    projectId: "clothing-ecomm-db",
    storageBucket: "clothing-ecomm-db.appspot.com",
    messagingSenderId: "278477628270",
    appId: "1:278477628270:web:204a980dd410d6e7a7977f"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;