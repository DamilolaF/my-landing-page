import React from 'react';

const Contact = () => {
  return (
    <div id="contact">
      <h1>RESERVE A TABLE</h1> 
      <form className='reservation' method='post'>
          <input type="text" placeholder='Full Name' required/>
          <input type="text" placeholder='Type Your E-mail' required/>
          <textarea placeholder='Write Here....' required></textarea>
          <input type="submit" value='Book'/>
      </form>
    </div>
  )
}

export default Contact;