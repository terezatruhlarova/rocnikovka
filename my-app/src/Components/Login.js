import React from "react";
import "../Styles/Login.css"



function Login(){

    return (
        <div>
          <div className="cover">
              <h1>Login</h1>
              <form className="contact-form-login" method="get">
              <input className='user-name' type="text" placeholder="Username" />
              <input className='psw' type="password" placeholder="Password" />
              <input type="Submit"  className="contact-form-btn-login" defaultValue="Send" />
              </form>
          </div>
        </div>
      );
}
export default Login;