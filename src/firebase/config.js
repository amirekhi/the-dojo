import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCeMbRiPA_jSeTkvfVIiiASWxuD2ypsYMg",
  authDomain: "the-dojo-1e333.firebaseapp.com",
  projectId: "the-dojo-1e333",
  storageBucket: "the-dojo-1e333.appspot.com",
  messagingSenderId: "516378917378",
  appId: "1:516378917378:web:4ad360ed3c004ec5a9051b"
};
// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }