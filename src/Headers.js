import React from 'react'


import './index.css';
import { Link } from 'react-router-dom';
const Headers = () => {
  return (
    <div className='heads'>
        <div>
        <h1>Portfolio</h1> 
        </div>

        <ul>
         
          <li ><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/Sites"className="nav-link">Sites</Link></li>
          <li ><Link to="/Skills"className="nav-link">Skills</Link></li>
          {/* <li><Link to="/Award"className="nav-link">Award</Link></li> */}
          <li><Link to="/About"className="nav-link">Contact</Link></li>
        </ul>

    </div>
  )
}

export default Headers
