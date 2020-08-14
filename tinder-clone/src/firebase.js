import firesbase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAJlfjDb3uyXVn5zGcMK7IQdKyMQsygt6U",
    authDomain: "tinder-clone-sg.firebaseapp.com",
    databaseURL: "https://tinder-clone-sg.firebaseio.com",
    projectId: "tinder-clone-sg",
    storageBucket: "tinder-clone-sg.appspot.com",
    messagingSenderId: "693403843417",
    appId: "1:693403843417:web:d5ee59341b372c2b02ea48",
    measurementId: "G-J4M6KHYYZH"
  };
  const firebaseApp = firebase.initializeaApp(firebaseConfig);
  const database = firebase.firestore();

  export default database;