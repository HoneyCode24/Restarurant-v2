import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footer-top">

        {/* LEFT BRAND */}
        <div className="footer-brand">
          <h2 className="logo">Figaro</h2>
          <p>
            Discover a gastronomic experience that transports you to the heart of Italy.
          </p>

            <div className="socials">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Teams</a>
            <a href="#">Courses</a>
            <a href="#">Contact</a>
          </div>

          <div>
            <h4>More Pages</h4>
            <a href="#">Events</a>
            <a href="#">Blog</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>

          <div>
            <h4>Utilities</h4>
            <a href="#">Style Guide</a>
            <a href="#">Instructions</a>
            <a href="#">Licenses</a>
            <a href="#">Password</a>
            <a href="#">404</a>
          </div>

         <div>
          <h4>Contact</h4>
          <p>Let’s build something amazing together.</p>
          <p><a href="mailto:honeycodes24@gmail.com">honeycodes24@gmail.com</a></p>
          <p><a href="https://github.com/HoneyCode24" target="_blank">GitHub</a></p>
        </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2026 Harry. All rights reserved.
  Designed & Developed by Harry.</p>
        <p>
        
Need a website like this? Let’s connect.
        </p>
      </div>

    </footer>
  );
};

export default Footer;