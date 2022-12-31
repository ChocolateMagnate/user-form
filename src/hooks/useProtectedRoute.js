import React from "react"
import { useNavigate } from "react-router-dom"
import firebase from "../firebase"

/**
 * This hook will redirect the user to the login page if they are not logged in.
 */
export default function useProtectedRoute() {
  const navigate = useNavigate()
  React.useEffect(() => {
    //onAuthStateChanged will react to changes in the user's authentication state.
    firebase.auth.onAuthStateChanged(user => {
      console.log(user)
      if (!user) navigate("/login")
    })
  }, [navigate])
}
