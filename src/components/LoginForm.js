import React, {useState} from "react"
import {requestLogin} from "../passwords"
import {useNavigate} from "react-router-dom"

export default function LoginForm(props) {
    const [user] = useState({})
    const navigate = useNavigate()
    return (<form>
        <p>Your name: </p>
        <input type="text" value={user.name}></input>
        <p>Your birthday:</p>
        <input type="date" value={user.birthday}></input>
        <p>Your email: </p>
        <input type="email" value={user.email}></input>
        <p>Your phone number: </p>
        <input type="tel" value={user.phone}></input>
        <p>Your password: </p>
        <input type="password" value={user.password}></input>
        <button onClick={async () => { await requestLogin(
            user.email,
            user.password
        ).then(() => {navigate("/home")})
         .catch(err => console.error(err))}}>Login</button>
    </form>)
}