import React from 'react';
import './Footer.css';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import spoon from '../images/spoon.png';
import cutlery from '../images/cutlery.png';


const Footer = () => ( 
 
<div className="app__footer">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">234 Adekunle Ajasin Drive, Surulere</p>
        <p className="p__opensans">+234 21 763 2289</p>
        <p className="p__opensans">+234 21 983 4631</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={cutlery} alt="footer-logo" className='logo' />
        <p className="p__opensans">You deserve a meal that's as delicious as it is memorable. And we're here to help you make that happen.</p>
        <img src={spoon} alt="footer-spoon" className='spoon__img' style={{marginTop: 15}} />
        <div className="app__footer-links_icons">
         <a href="http://facebook.com"> <FiFacebook /></a>
         <a href="http://twitter.com"> <FiTwitter /></a>
         <a href="http://instagram.com"><FiInstagram /></a>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday</p>
        <p className="p__opensans">09:00am - 09:00pm</p>
        
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">09:00am - 00:00am</p>
      </div>
    
    <div className="footer__copyright">
      <p className="p__opensans">2022 Ostyler. All Rights Reserved</p>
    </div>
  </div>
</div>
);
  
export default Footer;