import React from "react";
import {FaBars, FaTimes } from "react-icons/fa"
import { useRef } from "react";
import "../Styles/Navbar.css";




function Navbar(){
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <header>
            <h3>SHEIN</h3>
            <nav ref={navRef}>
                <a href="/">Home</a>
                <a href="/women">Women</a>
                <a href="/men">Men</a>
                <a href="/kids">Kids</a>
                <a href="/signin">Sign In</a>
                <a href="/info">Info</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}
export default Navbar;