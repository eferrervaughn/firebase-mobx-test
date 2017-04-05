import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBt7M-Obr_tk5l4bgQp1xenMdlBL8p9bo8",
  authDomain: "mobx-test-37786.firebaseapp.com",
  databaseURL: "https://mobx-test-37786.firebaseio.com",
  storageBucket: "mobx-test-37786.appspot.com",
  messagingSenderId: "636887854629"
};
firebase.initializeApp(config);

// Grabbing root of database
const root = firebase.database().ref();
// Assigning speficic node to todos , add or refs here
const todos = firebase.database().ref('todos');


// NOTICE - Add ref to the following nodes: prayer, praise, user, location??

const Fb = {
  root,
  todos
};

// allows other files to access the database endpoints
export { Fb };
