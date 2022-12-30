import React, {useState} from "react"
import {login} from "../authentication"
import {useNavigate} from "react-router-dom"
import Errors from "./Errors"

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
        <button onClick={() => { login(
            user.email,
            user.password, 
            user.name,
            user.phone
        ).then(() => {navigate("/home")})
         .catch(err => {console.error(err);
            <Errors code="01"/> //Error code 01 is for login errors
        })}}>Login</button>
    </form>)
}