import React from 'react';
import './Special.css';
import special from '../images/special-pizza.jpg';

const Special = () => {
  return (

      <div className="specialContainer">
         <h2>dd</h2>
        <div className="specialContent">
            <div className="textContent">
          <p>
          You'll be transported to Italy with our signature pepperoni pizza.
         A perfect blend of fresh, quality ingredients and delicious, tasty flavors will
          make you want to order another pizza.
              </p>  
        </div>
      </div>
    <button className='btn'>Order Now</button>
    </div>
    );
};

export default Special;