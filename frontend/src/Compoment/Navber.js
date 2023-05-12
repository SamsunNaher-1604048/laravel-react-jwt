import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Navber = () => {
  const navigate = useNavigate();

  const token = JSON.parse(sessionStorage.getItem('token'));
  const userLogout=()=>{
    if(token){
      sessionStorage.clear();
      navigate("/");
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className='nav-item'>
              <span role='button' className="nav-link" onClick={userLogout} >logout</span>
            </li>
        </ul>
     </nav>
    </div>
  )
}

export default Navber
