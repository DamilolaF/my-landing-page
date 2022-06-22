import React from 'react';
import './Cakes.css';
import { cakes } from '../data/dessert';


const Cakes = () => {
  const onClickHandle =() => {
  
    alert(`Dessert selected!`);
    console.log('Hello world');
  };

  return (
  <div className="cakeContainer" >
      <h1 className="cakeHead">Delicious Desserts </h1>
      <div className="cakeContent">
        {cakes.map((cake, index)=> (
            <div className="cakeCard" key={index}>
              <img src={cake.img} alt={cake.alt} className="cakeImg" />
            <div className="cakeInfo">
              <div className="propTitle">{cake.title}</div>
              <div className="cakePrice">{cake.price}</div>
              <button className='cakeBtn' onClick={onClickHandle}>Select</button>
              </div>
            </div>
        ))}
      </div>
  </div>   
  );
};

export default Cakes;