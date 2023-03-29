import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../Styles/Info.css"

function Info() 
     {
      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yolnsw6', 'template_dsz26jr', form.current, 'OIGaAnN4H0cYrZ7pM')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    
      return (
        <form className='contact' ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      );
    };

export default Info;