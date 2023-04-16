import React, { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';
import "../Styles/ContactUs.css"
import ContactUs_photo from "../img/contact-us-photo.jpg";

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
              <img src={ContactUs_photo} className="contact-us-photo" width="310" height="390" alt=""></img>
              </div>
              <div className="contact-us-content">
                <form className='contact-us-contact' ref={form} onSubmit={sendEmail}>
                  <input className='name' type="text" name="user_name" placeholder='Name'/>
                  <input className='email' type="email" name="user_email"  placeholder='Email'/>      
                  <textarea className='message'name="message" placeholder='Massage'/>
                  <input type={'submit'} className="contact-us-btn" value="Submit" defaultValue={send}></input>
                </form>
              </div>
          </div> 
          </div>
       </div>
      );
    };

export default Info;