import firebase from 'firebase'
import 'firebase/firestore'

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
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const notes = db.collection('notes')

export {
    db,
    auth,
    currentUser,
    notes
}