import "../Styles/Home.css"
import React from "react";
import logo from '../img/woman.png'
import logo2 from '../img/man.png'
import logo3 from '../img/kids.png'
import { Link } from "react-router-dom";


 function Home(){
    return(
       <div className="homePage">
      <Link to='woman'> <img src={logo} className="logo" alt=""/></Link>
      <p className="WOMEN">Women</p>
      <Link to='men'> <img src={logo2} className="logo2" alt=""/></Link>
      <p className="MEN">Men</p>
      <Link to='kids'> <img src={logo3} className="logo3" alt=""/></Link>
      <p className="KIDS">Kids</p>
       </div>
    );
}

export default Home;