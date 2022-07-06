import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import SignIn from './pages/Auth/SignIn'
import Signup from './pages/Auth/Signup'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/signin' element={<SignIn />} />
        <Route exact path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
