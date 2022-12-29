import React from 'react'
import LoginForm from './LoginForm'
import {useNavigate} from 'react-router-dom'

/** This function is used to print if login failed,
 * or otherwise thank the user and redirect to home.*/
export default function LoginConclusion({loginStatus}) {
    const navigate = useNavigate()
    if (loginStatus === "null") return (<div></div>)
    else if (loginStatus) return (<div className='prompt'>
        <p>Thank you for registering!</p>
        <button onClick={() => navigate('/')}>Log in the system</button>
    </div>)
    else return (<div>
        <p>Sorry, your login failed. Please try again.</p>
    </div>)

}