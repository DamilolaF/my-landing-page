import React from 'react';
import './Foods.css';
import { foods } from '../data/foods';
//import Cakes from './Cakes';
import Slider from 'react-slick';

const Foods = ({ id }) => {
    //<Cakes></Cakes>
        return (
          
        
        <div className="foodContainer" id={id}>
            <h1 className="foodHead">Popular Meal menu </h1>
            <div className="foodContent">
              
              {foods.map((food, index)=> (
                  <Slider >

                  <div className="foodCard" key={index}>
                    <img src={food.img} alt={food.alt} className="foodImg" />
                  <div className="foodInfo">
                    <div className="propTitle">{food.title}</div>
                    <div className="foodPrice">{food.price}</div>
                    <button className='foodBtn'>Select</button>
                    </div>
                  </div>
                  </Slider>
              ))}
            </div>
        </div>   
        );
      };
       
  
export default Foods;