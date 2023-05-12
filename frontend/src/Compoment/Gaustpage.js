import React from 'react'
import GaustNavber from './GaustNavber'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import { Route,Routes } from 'react-router-dom'

const Gaustpage = () => {
  return (
    <div>
      <GaustNavber/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Gaustpage
