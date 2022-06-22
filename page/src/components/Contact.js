import React from 'react';
import './Contact.css';

const Contact = () => {
  const submitHandle = ()=>{ 
    alert(`You have a reservation!`);
    console.log('Hello');
  };
  return (
<div id="contact" className='reservation'>
<main className='content-text clear'>
    <div className="reservation-info">
    <form className='reservation-form' onSubmit={submitHandle} >   
      <h2>RESERVE A TABLE</h2>
      <div className="field">
          <input type="text" placeholder='Full Name' required/>
          </div>
          <br />
          <div className="field">
          <input type="datetime-local" placeholder='Date' required/>
          </div>
         <br />
          <div className="field">
          <input type="email" placeholder='Type Your E-mail' required/>
          </div>
         <br />
          <div className="field">
          <textarea placeholder='Write Here....' required></textarea>
          </div> 
          <div className='btns'>
          <input type="submit" name="submit" value='Book' className='btns' onSubmit={submitHandle}/>  
          </div> 
        </form>
        </div>
      </main>
    </div>
  )
}

export default Contact;