import React, { useState } from 'react';
import Navbar from './Navbar';
//import { images } from './src/images/';
import './Header.css';
import Link from 'react-scroll/modules/components/Link';

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
      Ostyler is a delicious, high-quality food resturant that will always satisfy your hunger. It has a unique flavor, which you can't find anywhere else. You'll love it!
      </p>
      
      <button type='button' className='button' ><Link to="menu" smooth={true} duration={2000}>Explore</Link></button>
    </div>
    </div>
    <div className='app__wrapper_img'>
   {/* <img src={images.header} alt="header-img" className='app__header-img' /> */}
    </div>
  </div>
  )
}

export default Header;