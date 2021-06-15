import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAt9jcdDPezQI9I91ThhV0RrMpxfj66TF0",
    authDomain: "rookas-slack-mern-app.firebaseapp.com",
    projectId: "rookas-slack-mern-app",
    storageBucket: "rookas-slack-mern-app.appspot.com",
    messagingSenderId: "173291665543",
    appId: "1:173291665543:web:350bc717e6f9900b75a022",
    measurementId: "G-C6RJB9MEH8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db