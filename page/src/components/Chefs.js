import React from 'react';
import { chefs } from '../data/chef';
import './Chefs.css';
import './Cakes.css';
// import Slide from 'react-reveal/Reveal';

const Chefs = ({ id }) => {
  return (
    <div className="chefContainer" id={id}>
    <h1 className="cakeHeading">Our Kitchen Chefs</h1>
    <div className="chefWrapper">
        {chefs.map((chef, index) => (
           
                <div className="cakeCard">
                    <img src={chef.img} className="chefImg" alt={chef.alt} />
                    <div className="cakeInfo">
                        <div className="protTitle">{chef.name}</div>
                    </div>
                </div>
             
        ))}
        <h2 className='quote'> "At Ostyler, we believe that food is more than just a meal—it's an experience."<p className='name'>- Simeon Peters,Head Chef</p></h2>
    </div>
</div> 
  );
};

export default Chefs;