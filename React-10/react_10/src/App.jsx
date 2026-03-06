import React from 'react'
// import Dom from './component/Dom'
import Reff from './component/Reff'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Profile from './component/Profile'
import Dashbaord from './component/Dashbaord'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashbaord />}  />
        <Route path='/profile' element={<Profile />}  />
      </Routes>

    <Link to="/">Home</Link>
    <Link to="/dashboard">Dahboard</Link>
    <Link to="/profile">Profile</Link>

      {/* <Reff /> */}
    </div>
  )
}

export default App