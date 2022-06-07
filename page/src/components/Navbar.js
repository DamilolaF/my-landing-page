import React from "react";
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
const Navbar = () => {
  return (
    
        <nav className="total-nav">
          <div className='desktop'>Ostyler
          </div>
          <div className="navicon">
          <FaBars className="icon"></FaBars> 
          </div>
         <ul className='app__navbar-links' >
        <li className='p__opensans' ><a href="#home">Home</a></li>
        <li className='p__opensans' ><a href="#about">About</a></li>
        <li className='p__opensans' ><a href="#menu">Menu</a></li>
        <li className='p__opensans' ><a href="#awards">Awards</a></li>
        <li className='p__opensans' ><a href="#contact">Contact</a></li>
      </ul></nav>
    
  )
};

export default Navbar;