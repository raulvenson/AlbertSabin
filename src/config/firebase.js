import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC9JRoO2uEH7rk_7qNp4YD4Gg-3SGa4T18",
  authDomain: "albert-sabin-edu.firebaseapp.com",
  databaseURL: "https://albert-sabin-edu.firebaseio.com",
  projectId: "albert-sabin-edu",
  storageBucket: "albert-sabin-edu.appspot.com",
  messagingSenderId: "872754677009",
  appId: "1:872754677009:web:204ba985c0af9a71d478b0"
};
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);
  