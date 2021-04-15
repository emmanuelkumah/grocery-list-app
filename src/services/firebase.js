import firebase from "firebase";
// project config details
var firebaseConfig = {
  apiKey: "AIzaSyCMSMxDq7KtNVwTgX55tdzis3uYyjaf3qQ",
  authDomain: "grocery-list-582df.firebaseapp.com",
  projectId: "grocery-list-582df",
  storageBucket: "grocery-list-582df.appspot.com",
  messagingSenderId: "32680905286",
  appId: "1:32680905286:web:507d62c0545ab51e351847",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
