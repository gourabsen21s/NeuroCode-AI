import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from "./screens/Login"
import Register from "./screens/Register"
import Home from "./screens/Home"
import Project from "./screens/Project"
import LandingPage from "./screens/LandingPage"
import { UserContext } from "./context/user.context"
import axios from "./config/axios"
import './index.css'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      axios
        .get("/users/profile")
        .then((res) => {
          setUser(res.data.user)
          setLoading(false)
        })
        .catch((err) => {
          console.log(err)
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/project"
            element={user ? <Project /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </UserContext.Provider>
  )
}

export default App
