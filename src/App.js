import React from 'react'
import {Routes, Route} from 'react-router-dom'
import RegisterPrompt from './components/RegisterPrompt';
import RegisterForm from './components/RegisterForm';
import LoginPrompt from './components/LoginPrompt';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import './styles.css';

<Routes>
  <Route path="/" element={<App/>}/>
  <Route path="/login" element={<LoginForm/>}/>
  <Route path="/register" element={<RegisterForm/>}/>
  <Route path="/home" element={<Home/>}/>
</Routes>

function App() {
  return (
    <div>
      <h1 className='top-banner'>User-form</h1>
      <LoginPrompt/>
      <RegisterPrompt/>
      <div className='footer'>Created by Vlad Korol 2022</div>
    </div>
  )
}

export default App
