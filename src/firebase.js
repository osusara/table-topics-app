import * as firebase from "firebase";

const fire = firebase.initializeApp({
  apiKey: "AIzaSyDf9PUoOM07pp6S_B7ITRB1wAnslFD7gA4",
  authDomain: "toastmaster-app.firebaseapp.com",
  databaseURL: "https://toastmaster-app.firebaseio.com",
  projectId: "toastmaster-app",
  storageBucket: "toastmaster-app.appspot.com",
  messagingSenderId: "443243805008",
  appId: "1:443243805008:web:11b0f56b1eb4e3e3cb1455",
  measurementId: "G-EH0NY0EZBR",
});

export const db = fire.firestore();


