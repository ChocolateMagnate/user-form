import React, {useState} from "react"
import {login} from "../authentication"
import {useNavigate} from "react-router-dom"

export default function LoginForm(props) {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [birthday, setBirthday] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    return (<div>
        <p>Your name: </p>
        <input type="text" value={username}
            onChange={event => {setUsername(event.target.value)}}></input>
        <p>Your birthday:</p>
        <input type="date" value={birthday}
            onChange={event => {setBirthday(event.target.value)}}></input>
        <p>Your email: </p>
        <input type="email" value={email}
            onChange={event => {setEmail(event.target.value)}}></input>
        <p>Your phone number: </p>
        <input type="tel" value={phone}
            onChange={event => {setPhone(event.target.value)}}></input>
        <p>Your password: </p>
        <input type="password" value={password}
            onChange={event => {setPassword(event.target.value)}}></input>
        <button onClick={() => { login(
            email,
            password,
            username,
            phone
        ).then(user => {
            props.setUser(user)
            navigate("/home", {user: user})
        })}}>Login</button>
    </div>)
}