import React from 'react'
import Home from './Home'
import Dashboard from './Dashboard'
import About from './About'



const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <a href='/'> Home</a>
        </li>
        <li>
            <a href='/about'> About</a>
        </li>
        <li>
            <a href='/dashboard'> Dashboard</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
