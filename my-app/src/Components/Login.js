import React from "react";
import { useRef, useState, useEffect, useContext} from "react";
import "../Styles/Login.css"
import { Link } from "react-router-dom";


function Login(){
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    return(
    <div className="login">
        {success ? ( 
            <section>
                
                <h1>You are logged in! </h1>
                <br/>
                <p>
                <Link to='/'>
                    Go to Home
                </Link>
                </p>
            </section>
        ):(
        <section className="username">
           <p ref={errRef} className = {errMsg ? "errmgs" : "offscreen"} aria-live="assertive"></p>
           <h1>Sign In</h1>
           <form onSubmit={handleSubmit} >
            <label htmlFor="username">Username:</label>
            <input 
                type="text" 
                id="username" 
                ref={userRef}
                autoComplete="off" 
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
            />

            <label htmlFor="password">Password:</label>
            <input 
                type="password" 
                id="password" 
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
            />
            <button>Sign In</button>
           </form>
        </section>
             
        )}
       </div>
    )
}

export default Login;