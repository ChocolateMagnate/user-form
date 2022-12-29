import React from "react"
import {useNavigate} from "react-router-dom"

export default function RegisterPrompt(props) {
    const navigate = useNavigate()

    return (<div className="prompt">
        <p>Don't have an account?</p>
        <button onClick={() => navigate("/register")}>Register now</button>
    </div>)
}