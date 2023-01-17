// Import the functions you need from the SDKs you need
if (!window.firebase) {
  import("firebase/app");
}

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDBn1QHyB46BytoLinkpG6zaSb-g6t0z9A",
  authDomain: "easywash-maejo-b1e7f.firebaseapp.com",
  projectId: "easywash-maejo-b1e7f",
  storageBucket: "easywash-maejo-b1e7f.appspot.com",
  messagingSenderId: "335109579348",
  appId: "1:335109579348:web:313c75b8088ad8885483c1",
});

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
const doc = firebase.firestore();
const updateDoc = firebase.firestore();

export { db, doc, updateDoc };
