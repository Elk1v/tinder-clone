import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDCbGwo1aUo6296hy8rLx2ocnmu4pfgq-A",
    authDomain: "tinder-clone-deb19.firebaseapp.com",
    databaseURL: "https://tinder-clone-deb19.firebaseio.com",
    projectId: "tinder-clone-deb19",
    storageBucket: "tinder-clone-deb19.appspot.com",
    messagingSenderId: "935088805338",
    appId: "1:935088805338:web:729655b6faca2d15291ce3",
    measurementId: "G-1QDEZ6P0N8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;

