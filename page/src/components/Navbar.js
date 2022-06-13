import React from "react";
import { FaBars } from 'react-icons/fa';
import './Navbar.css';




const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    
        <nav className="total-nav">
          <div className='desktop'>OSTYLER
          </div>
         <ul className='navbar-links' >
              <li className='navbar-link' ><a href="#home">Home</a></li>
              <li className='navbar-link' ><a href="#about">About</a></li>
              <li className='navbar-link' ><a href="#menu">Menu</a></li>
              <li className='navbar-link' ><a href="#contact">Contact</a></li>
      </ul>
      <div className="reserve">
          <a href="http://geritch.com" className="navbar">Reservation</a>
        </div>
      
          <div className='navbar-smallscreen'>
        <FaBars color='black' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='navbar-smallscreen_overlay flex__center slide-bottom'>
          <FaBars color='white' fontSize={24} className='overlay__close' onClick={() => setToggleMenu(false)}/>
          <ul className='navbar-smallscreen-links' >
            <li className='navbar-link' ><a href="#home">Home</a></li>
            <li className='navbar-link' ><a href="#about">About</a></li>
            <li className='navbar-link' ><a href="#menu">Menu</a></li>
            <li className='navbar-link' ><a href="#contact">Contact</a></li>
          </ul>
        </div>
        )}

        </div>
      </nav>

  )
};

export default Navbar;