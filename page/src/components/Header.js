import React from 'react';
import Navbar from './Navbar';
//import { images } from './src/images/';
import './Header.css';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home' >
    <Navbar></Navbar>
    
    <div className='app__wrapper_info' >
      <h1 className='app__header-h1' >Flavors for royalty</h1>
      <p className='navbar-link' style={{ margin: '2rem 0' }} >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim neque sit nisi amet dicta in, ea sapiente placeat earum error.
      </p>
      <button type='button' className='custom__button' >Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
   {/* <img src={images.header} alt="header-img" className='app__header-img' /> */}
    </div>
  </div>
  )
}

export default Header;