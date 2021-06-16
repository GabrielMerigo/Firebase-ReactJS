import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDBAMwMWiGgKNalrBq7SgHDYyS-bu4XLDI",
  authDomain: "curso-reactjs-f2250.firebaseapp.com",
  projectId: "curso-reactjs-f2250",
  storageBucket: "curso-reactjs-f2250.appspot.com",
  messagingSenderId: "6018120120",
  appId: "1:6018120120:web:bb2cd0e405e413ab07774d",
  measurementId: "G-D30K0QPQRK"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase