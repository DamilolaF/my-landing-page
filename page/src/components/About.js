import React from 'react';
import './About.css';
import cutlery from '../images/cutlery.png';

const About = () => {
  return (
    <>
    <div className="container" id='about'>
    <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          {/* <img src={images.spoon} alt="about spoon" className='spoon__img' /> */}
          <p className='p__opensans'>
              Our restaurant was founded on the idea of providing our customers with both excellent service and quality food in an environment that feels like home.
          </p>
          <button type='button' className='custom__button'>Know More</button>
          <span>
            <img src={cutlery} alt="about cutlery" className='cutlery__img'/>
          </span>
      </div>
      <div className='app__aboutus-content_history' >
        <h1 className='headtext__cormorant'>Our History</h1>
        {/* <img src={images.spoon} alt="about spoon" className='spoon__img' /> */}
        <p className='p__opensans'>
        Family is the cornerstone of our restaurant. Since we opened our doors in 1983, we've worked to create a place where families can come together and experience the best food and service in town.

        Over the years, our restaurant has grown from a small, local establishment into one of the most popular restaurants in its area. But despite our growth, we've always stayed true to our roots: providing quality food and service with a personal touch.
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      </div>
      </>
  );
};

export default About;