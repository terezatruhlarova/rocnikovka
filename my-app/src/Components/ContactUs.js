import React, { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';
import "../Styles/ContactUs.css"

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
        <div>
          <div className="contact-us-content-page">
            <div className="contact-us-page">
              <div className="contact-us-info">
                <h1>Contact us</h1>
                <p>ggggggggg </p>
              </div>
              <div className="contact-us-content">
                <form className='contact' ref={form} onSubmit={sendEmail}>
                  <input className='username' type="text" name="user_name" placeholder='Username'/>
                  <input className='email' type="email" name="user_email"  placeholder='Email'/>      
                  <textarea className='message'name="message" placeholder='Massage'/>
                  <input type={'submit'} className="contact-us-btn" defaultValue={send}></input>
                </form>
              </div>
          </div> 
          </div>
       </div>
      );
    };

export default Info;