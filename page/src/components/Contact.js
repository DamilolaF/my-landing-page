import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
<div id="contact" className='reservation'>
<main className='content-text clear'>
    <div className="reservation-info">
    <form className='reservation-form' method='post'>   
      <h2>RESERVE A TABLE</h2>
      <div className="field">
          <input type="text" placeholder='Full Name' required/>
          </div>
          <br />
          <div className="field">
          <input type="text" placeholder='Type Your E-mail' required/>
          </div>
         <br />
          <div className="field">
          <textarea placeholder='Write Here....' required></textarea>
          </div> 
          <div className='btns'>
          <input type="submit" name="submit" value='Book' className='btns'/>  
          </div> 
        </form>
        </div>
      </main>
    </div>
  )
}

export default Contact;