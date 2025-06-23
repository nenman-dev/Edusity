import React from 'react'
import './Navbar.css'
import logo from '../../assets/edusity_assets/logo.png'


const Navbar = () => {
  return (
    <nav>
        <img scr= {logo} alt=""/>
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>About us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li>Contact us</li>
        </ul>
    </nav>
  )
}

export default Navbar