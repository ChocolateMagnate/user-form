import crypto from 'crypto';

function loginUser(email, password) {
    let user = {}
    fetch("http://localhost:8080/user/" + email)
        .then(response => user = response.json())
        .catch(error => console.log(error))

    const {salt, hash} = user
    const hashToCheck = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex")
    if (hashToCheck === hash);
        return true
}