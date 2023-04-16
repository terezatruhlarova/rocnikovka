import React from "react";
import "../Styles/Login.css"



function Login(){

    return (
        <div>
          <div className="login-page">
            <div className="login-page-content">
              <h1 className="h1-login">Login</h1>
              <form className="login-info" method="get">
              <input className='username-login' type="text" placeholder="Username" />
              <input className='psw-login' type="password" placeholder="Password" />
                <input type="Submit"  className="btn-login" defaultValue="Send" />
              </form>
              </div>
          </div>
        </div>
      );
}
export default Login;