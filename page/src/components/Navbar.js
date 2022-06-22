import React from "react";
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-scroll';




const Navbar = () => {
   const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    
        <nav className="total-nav">
          <Link to='home' >
          <div className='desktop'>OSTYLER
          </div>
          </Link>
         <ul className='navbar-links' >
              <li><Link to="home" smooth={true} duration={3000}>Home</Link></li>
              <li><Link to="about" smooth={true} duration={3000}>About</Link></li>
              <li><Link to="menu" smooth={true} duration={3000}>Menu</Link></li>
              <li><Link to="contact" smooth={true} duration={3000}>Reservation</Link></li>
      </ul>
      {/* <div className="reserve">
          <a href="http://geritch.com" className="navbar">Reservation</a>
        </div> */}
      
          <div className='navbar-smallscreen'>
        <FaBars color='black' fontSize={26} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='navbar-smallscreen_overlay flex__center slide-bottom'>
          <FaBars color='white' fontSize={25} className='overlay__close' onClick={() => setToggleMenu(false)}/>
          <ul className='navbar-smallscreen-links' >
              <li><Link to="home" smooth={true} duration={3000}>Home</Link></li>
              <li><Link to="about" smooth={true} duration={3000}>About</Link></li>
              <li><Link to="menu" smooth={true} duration={3000}>Menu</Link></li>
              <li><Link to="contact" smooth={true} duration={3000}>Reservation</Link></li>
          </ul>
        </div>
        )}

        </div>
      </nav>

  )
};

export default Navbar;