import React from "react"
import {useNavigate} from "react-router-dom"
import "../styles.css"

export default function LoginPrompt() {
    const navigate = useNavigate()

    return (<div className="prompt">
        <p>Don't miss the fun!</p>
        <button onClick={() => navigate("/login")}>Log in the system</button>
    </div>)
}