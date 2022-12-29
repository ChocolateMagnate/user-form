import React from "react"
import "../styles.css"

function logout(email) {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
}

export default function Logout(props) {
    return (<div className="prompt">
        <p>Are you sure you want to log out?</p>
        <button onClick={() => logout(props.user.email)}>Yes</button>
        <button onClick={() => props.history.push("/home")}>No</button>
    </div>)
}