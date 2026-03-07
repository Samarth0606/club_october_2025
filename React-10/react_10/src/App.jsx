import React, { Suspense } from 'react'
// import Dom from './component/Dom'
import Reff from './component/Reff'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
// import Profile from './component/Profile'
const Profile = React.lazy( ()=> import('./component/Profile') )
const Dashbaord = React.lazy( ()=> import('./component/Dashbaord') )

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={ <Suspense fallback="loading1..." > <Dashbaord /> </Suspense> }  />
        <Route path='/profile' element={<Suspense fallback="loading2..." > <Profile /> </Suspense>}  />
      </Routes>

    <Link to="/">Home</Link>
    <Link to="/dashboard">Dahboard</Link>
    <Link to="/profile">Profile</Link>

      {/* <Reff /> */}
    </div>
  )
}

export default App