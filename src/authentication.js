import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"
import { getAnalytics } from "firebase/analytics"
import { getAuth, signInWithEmailAndPassword,
    createUserWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAShHVKUXYJnNHbs7kRfckAHxPraFMw7jI",
    authDomain: "user-form-8ffd6.firebaseapp.com",
    databaseURL: "https://user-form-8ffd6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "user-form-8ffd6",
    storageBucket: "user-form-8ffd6.appspot.com",
    messagingSenderId: "763038897451",
    appId: "1:763038897451:web:52dd73b058ace184c9216e",
    measurementId: "G-027WK1F2SE"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const firestore = getFirestore(app)
const auth = getAuth(app)
const firebase = {app, auth, analytics, firestore}

/**
 * Verifies if name consists of two words, first letter of each word is capital.
 * @param {*} name The string of the name prompted by the user.
 * @returns True if the name is valid, false otherwise.
 */
function isValidName(name) {
    const nameRegex = "/^[A-Z][a-z]+\s[A-Z][a-z]+$/"
    return nameRegex.test(name)
}

function isValidNumber(number) {
    const numberRegex = "+380 \([0-9]{2}`) [0-9]{3}-[0-9]{2}-[0-9]{2}"
    return numberRegex.test(number)
}

/**
 * Logs user in using firebase.
 * @param {*} email The user's email string
 * @param {*} password The user's raw text password
 */
export function login(email, password, name, number) {
    /*if (!isValidName(name) || !isValidNumber(number)) {
        alert("Invalid name or number")
        return
    }*/
    const auth = getAuth()
    return signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => console.log(userCredential)) 
        .catch(err => { console.error(err) })
    
}

export function register(email, password) {
    const auth = getAuth()
    console.log("Auth: ", auth)
    createUserWithEmailAndPassword(auth, email, password)
        .then(user => { console.log(user) })
        .catch(err => { console.error(err) })
}

export function logout() {
    const auth = getAuth()
    auth.signOut()
}
