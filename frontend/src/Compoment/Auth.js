import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navber from './Navber'
import Home from '../Pages/Home'
import Dashboard from '../Pages/Dashboard'

const Auth = () => {
  return (
    <div>
    <Navber/>
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  </div>
  )
}

export default Auth
