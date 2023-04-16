import React from "react";
import "../Styles/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
            <h3>Website made by</h3>
            <div className="footer-info">
              <p>Tereza Truhlářová</p>
              <p>Email: teriinaa.teriinaa@gmail.com</p>
              <a href="https://www.instagram.com/teriinaa.teriinaa/" className="instagram-link">
                Follow me on Instagram
              </a>
            </div>
          </div>
    </footer>
  );
}

export default Footer;
