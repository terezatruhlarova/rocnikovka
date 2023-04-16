import "../Styles/Home.css"
import React from "react";
import { Link } from "react-router-dom";
import Women from "../img/Women.png";
import Men from "../img/Men.png";
import Kids from "../img/Kids.png";
import backgroundSVG from "../img/background_text.svg";



 function Home(){
    return(
      <div className="home-page-body">
        <div className="home-page-background-content">
          <img src={backgroundSVG} className="home-page-background-text" alt=""></img>
        </div>
        <div className="home-page-links">
          <Link to='woman'> <img src={Women} className="home-women" width="330" height="500" alt=""/></Link>
          <Link to='men'> <img src={Men} className="home-men" width="330" height="500" alt=""/></Link>
          <Link to='kids'> <img src={Kids} className="home-kids" width="330" height="500" alt=""/></Link>
        </div>
    </div>
    )
}

export default Home;