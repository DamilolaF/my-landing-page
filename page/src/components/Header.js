import React, { useState } from 'react';
import Navbar from './Navbar';
//import { images } from './src/images/';
import './Header.css';

const Header = () => {
  const [show, setShow] = useState(false);

  const toggle =() => {
    setShow(!show);
  };
  return (
    <div className='app__header app__wrapper section__padding' id='home' >
    <Navbar toggle={toggle}></Navbar>

    <div className='content' >
      <div className="contentItems">
      <h1 className='app__header-h1' >Flavors for royalty</h1>
      <p className='navbar-link' style={{ margin: '2rem 0' }} >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim neque sit nisi amet dicta in, ea sapiente placeat earum error.
      </p>
      
      <button type='button' className='button' >Reservation</button>
    </div>
    </div>
    <div className='app__wrapper_img'>
   {/* <img src={images.header} alt="header-img" className='app__header-img' /> */}
    </div>
  </div>
  )
}

export default Header;