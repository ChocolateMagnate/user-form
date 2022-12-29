import React, {useState} from "react"
import {requestRegisterUser} from "../passwords"
import LoginForm from "./LoginForm"

export default function RegisterForm() {
    const [name, setName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    return (<div><form>
        <p>Your name: </p>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)}></input>
        <p>Your birthday:</p>
        <input type="date" value={birthday} onChange={(event) => setBirthday(event.target.value)}></input>
        <p>Your email: </p>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}></input>
        <p>Your phone number: </p>
        <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)}></input>
        <p>Your password: </p>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
        <button onClick={() => requestRegisterUser(
            name,
            birthday,
            email,
            phone,
            password
        )}>Register</button>
    </form>
    <LoginForm/>
    </div>)
}