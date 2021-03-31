import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA322qEZp4mww-lcb0DJyYbRAtAvvYrgwk",
    authDomain: "twitter-clone-c87.firebaseapp.com",
    projectId: "twitter-clone-c87",
    storageBucket: "twitter-clone-c87.appspot.com",
    messagingSenderId: "833572668382",
    appId: "1:833572668382:web:2445b8e013ce8c549e134f",
    measurementId: "G-JK0GG71TS8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
