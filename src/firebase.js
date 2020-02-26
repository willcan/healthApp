import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBKwBK5IfHKCCpZHJMbMkHhM24aNivoc5s",
  authDomain: "healthapp-798e5.firebaseapp.com",
  databaseURL: "https://healthapp-798e5.firebaseio.com",
  projectId: "healthapp-798e5",
  storageBucket: "healthapp-798e5.appspot.com",
  messagingSenderId: "757233192971",
  appId: "1:757233192971:web:279afe28a69fae0cacb70e"
}; 

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
