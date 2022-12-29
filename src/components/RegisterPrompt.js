import React from "react"
import {useHistory} from "react-router-dom"

export default function RegisterPrompt(props) {
    const history = useHistory()

    return (<div className="prompt">
        <p>Don't have an account?</p>
        <button onClick={() => history.push("/register")}>Register now</button>
    </div>)
}