import React from "react";

const Navbar = () => {
  return (
    
        <nav><div className='logo'>Ostyler</div>
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