import React from 'react'
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Base from './components/Base';
import './styles.css'


export default function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Base/>}/>
      <Route path="/register" element={<RegisterForm/>}/>
      <Route path="/login" element={<LoginForm/>}/>
    </Routes>
  </BrowserRouter>)
}
