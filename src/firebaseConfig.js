import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// firebase init goes here
const config = {
    apiKey: "AIzaSyCbrq84Nyn9upzEmpRSIbfuvWMT0QUMqSA",
    authDomain: "notes.wrenn.me",
    databaseURL: "https://notes-6398f.firebaseio.com",
    projectId: "notes-6398f",
    storageBucket: "notes-6398f.appspot.com",
    messagingSenderId: "444355898601"
  }
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

db.enablePersistence()

export {
    db,
    auth,
    storage,
    firebase
}
