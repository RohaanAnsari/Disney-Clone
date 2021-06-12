import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyATMt33EAFfHmv29ENgvHqv2O-1Ih8ZTt8",
  authDomain: "disneyplusclone-84e37.firebaseapp.com",
  projectId: "disneyplusclone-84e37",
  storageBucket: "disneyplusclone-84e37.appspot.com",
  messagingSenderId: "620451701934",
  appId: "1:620451701934:web:4f452696c117661fc9393f",
  measurementId: "G-HQWKZHCN2N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;