import React from "react"
import {useHistory} from "react-router-dom"
import "../styles.css"

export default function LoginPrompt() {
    const history = useHistory()

    return (<div className="prompt">
        <p>Don't miss the fun!</p>
        <button onClick={() => history.push("/login")}>Log in the system</button>
    </div>)
}