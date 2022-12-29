import crypto from 'crypto';

/**
 * Verifies if name consists of two words, first letter of each word is capital.
 * @param {*} name The string of the name prompted by the user.
 * @returns True if the name is valid, false otherwise.
 */
function isValidName(name) {
    const nameRegex = "/^[A-Z][a-z]+\s[A-Z][a-z]+$/"
    return nameRegex.test(name)
}

/**
 * Verifies if the number obeys the Ukrainian phone number format.
 * @param {*} number The string of the phone number prompted by the user.
 * @returns True if the phone number is valid, false otherwise.
 */
function isValidNumber(number) {
    const numberRegex = "+380 \([0-9]{2}`) [0-9]{3}-[0-9]{2}-[0-9]{2}"
    return numberRegex.test(number)
}

/**
 * Generates the salt and hash for a password.
 * @param {*} password The raw text password to generate a hash from.
 * @returns The salt (independent factor) and the hash (what is stored in the database).
 */
export function generatePassword(password) {
    const salt = crypto.randomBytes(16).toString("hex")
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex")
    return {salt, hash}
}

/**
 * Attempts to login the user by sending a request to the backend.
 * @param {*} email Is used to identify the user.
 * @param {*} password The raw text password user entered.
 */
export async function requestLogin(email, password, name, phone) {
    if (!isValidName(name) || !isValidNumber(phone)) return false
    fetch('http://localhost:8080/login-user/' + email + "/" + password)
        .then(() => {})
        .then(user => {return user})
        .catch(error => console.log(error))
}

/**
 * Sends request to register user and navigates to the login page.
 * @param {*} name Username
 * @param {*} birthday The user's birthday date
 * @param {*} email The user's email
 * @param {*} phone The user's phone number
 * @param {*} password The user's raw text password
 */
export function requestRegisterUser(name, birthday, email, phone, password) {
    const {salt, hash} = generatePassword(password)
    const user = {name, birthday, email, phone, salt, hash}
    fetch('http://localhost:8080/', {
      method: 'POST', 
      mode: 'cors', 
      body: JSON.stringify(user)
    })
    this.props.history.push("/login")
}