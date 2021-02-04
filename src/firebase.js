import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "countdown-942d7.firebaseapp.com",
  databaseURL: "https://countdown-942d7-default-rtdb.firebaseio.com",
  projectId: "countdown-942d7",
  storageBucket: "countdown-942d7.appspot.com",
  messagingSenderId: "526275200094",
  appId: "1:526275200094:web:d41007f6eb96517011e0cf",
  measurementId: "G-MFBDM4M876"
})

const db = firebaseApp.firestore()

export default db