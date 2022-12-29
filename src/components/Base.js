import React from 'react'
import LoginPrompt from './LoginPrompt'
import RegisterPrompt from './RegisterPrompt'
import '../styles.css'


export default function Base() {
    return (<div>
        <h1 className='top-banner'>User-form</h1>
        <LoginPrompt/>
        <RegisterPrompt/>
        <div className='footer'>Created by Vlad Korol 2022</div>
      </div>)
}