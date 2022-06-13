import React from 'react';
import { foods } from '../data/foods';

const Foods = ({ id }) => {
   
        return (
        <div className="foodContainer" id={id}>
            <h1 className="foodHead">Popular Meal menu </h1>
            <div className="foodContent">
              {foods.map((food, index)=> (
                  <div className="foodCard" key={index}>
                    <img src={food.img} alt={food.alt} className="foodImg" />
                  <div className="foodInfo">
                    <div className="propTitle">{food.title}</div>
                    <div className="foodPrice">{food.price}</div>
                    <button className='foodBtn'>Select</button>
                    </div>
                  </div>
              ))}
            </div>
        </div>   
        );
      };
       
  
export default Foods;