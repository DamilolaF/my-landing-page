import React from 'react';
import { cakes } from '../data/dessert';

const Cakes = ( {id} ) => {
  return (<div className="cakeContainer">
      <h1 className="cakeHead">Delicious Desserts </h1>
      <div className="cakeContent">
        {cakes.map((cake,index)=> (
            <div className="cakeCard" key={index}>
              <img src={cake.src} alt={cake.alt} className="cakeImg" />
            <div className="cakeInfo">
              <div className="propTitle">{cake.title}</div>
              <div className="cakePrice">{cake.price}</div>
              <button className='cakeBtn'>Select</button>
              </div>
            </div>
        ))}
      </div>
  </div>   
  );
};

export default Cakes;