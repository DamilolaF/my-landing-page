import React from "react";
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
const Navbar = () => {
  return (
    
        <nav className="total-nav">
          <div className='desktop'>OSTYLER
          </div>
          <div className="navicon">
          <FaBars className="icon"></FaBars> 
          </div>
         <ul className='app__navbar-links' >
              <li className='navbar-link' ><a href="#home">Home</a></li>
              <li className='navbar-link' ><a href="#about">About</a></li>
              <li className='navbar-link' ><a href="#menu">Menu</a></li>
              <li className='navbar-link' ><a href="#awards">Awards</a></li>
              <li className='navbar-link' ><a href="#contact">Contact</a></li>
      </ul>
        <div className="reserve">
          <a href="http://geritch.com" className="p__opensans">Reservation</a>
        </div>
      </nav>
    
  )
};

export default Navbar;