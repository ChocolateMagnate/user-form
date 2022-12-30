import React from "react"
import {useNavigate} from "react-router-dom"

export default function Errors({code}) {
    const navigate = useNavigate()
    const normal = (<div>
        <p>Something went wrong. Please try again.</p>
        <button onClick={() => {navigate("/")}}>Go back</button>
    </div>)
    const loginError = (<div>
        <p>Invalid email or password. Please try again.</p>
        <button onClick={() => {navigate("/")}}>Go back</button>
    </div>)

    let error = (<div></div>) //Generic JSX element
    switch (code) {
        case "01":
            error = loginError
            break
        default:
            error = normal
            break
    }
    return error
}