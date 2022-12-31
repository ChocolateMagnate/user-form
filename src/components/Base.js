import React from 'react'
import LoginPrompt from './LoginPrompt'
import RegisterPrompt from './RegisterPrompt'
import '../styles.css'

export default function Base() {
    return (<div>
        <div className="main">
          <h1 className='top-banner'>User-form</h1>
          <div className="row">
            <LoginPrompt/>
            <RegisterPrompt/>
          </div>
        </div>
        <div className='footer'>Created by Vlad Korol 2022</div>
      </div>)
}