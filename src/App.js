import React, {useState} from "react"
import {Route, BrowserRouter, Routes} from "react-router-dom"
import RegisterForm from "./components/RegisterForm"
import LoginForm from "./components/LoginForm"
import Discord from "./components/Discord"
import Google from "./components/Google"
import Linux from "./components/Linux"
import Base from "./components/Base"
import Home from "./components/Home"
import "./styles.css"

export default function App() {
  const [user, setUser] = useState(null)
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Base user={user} setUser={setUser}/>}/>
      <Route path="/register" element={<RegisterForm user={user} setUser={setUser}/>}/>
      <Route path="/login" element={<LoginForm user={user} setUser={setUser}/>}/>
      <Route path="/home" element={<Home user={user} setUser={setUser}/>}/>
      <Route path="/discord" element={<Discord user={user} setUser={setUser}/>}/>
      <Route path="/google" element={<Google user={user} setUser={setUser}/>}/>
      <Route path="/linux" element={<Linux user={user} setUser={setUser}/>}/>
    </Routes>
  </BrowserRouter>)
}
