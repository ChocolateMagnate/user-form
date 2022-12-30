import React, {useState} from "react"
import { register } from "../authentication"

export default function RegisterForm() {
    const [name, setName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    //The form tag can't be used because it raises Firebase network rejection error.
    return (<div>
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
        <button onClick={() => register(
            email,
            password
        )}>Register</button>
    </div>)
}