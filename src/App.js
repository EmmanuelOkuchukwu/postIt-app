import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import SignIn from './pages/Auth/SignIn'
import Signup from './pages/Auth/Signup'
import Feed from './pages/Post/Feed'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
    </div>
  )
}

export default App
