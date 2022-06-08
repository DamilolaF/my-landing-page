import React from "react";
import { FaBars } from 'react-icons/fa';
import './Navbar.css';



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    
        <nav className="total-nav">
          <div className='desktop'>OSTYLER
          </div>
         <ul className='app__navbar-links' >
              <li className='navbar-link' ><a href="#home">Home</a></li>
              <li className='navbar-link' ><a href="#about">About</a></li>
              <li className='navbar-link' ><a href="#menu">Menu</a></li>
              <li className='navbar-link' ><a href="#awards">Awards</a></li>
              <li className='navbar-link' ><a href="#contact">Contact</a></li>
      </ul>
      <div className="reserve">
          <a href="http://geritch.com" className="navbar-link">Reservation</a>
        </div>
      
          <div className='app__navbar-smallscreen'>
        <FaBars color='black' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <FaBars fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
          <ul className='app__navbar-smallscreen-links' >
            <li className='navbar-link' ><a href="#home">Home</a></li>
            <li className='navbar-link' ><a href="#about">About</a></li>
            <li className='navbar-link' ><a href="#menu">Menu</a></li>
            <li className='navbar-link' ><a href="#awards">Awards</a></li>
            <li className='navbar-link' ><a href="#contact">Contact</a></li>
          </ul>
        </div>
        )}

        </div>
      </nav>

  )
};

export default Navbar;