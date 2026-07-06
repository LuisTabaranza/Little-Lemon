import React from 'react';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>123 Restaurant Row, Chicago</p>
          <p>(312) 555-0199</p>
          <p>info@littlelemon.com</p>
        </div>
        <div className="footer-column">
          <h4>Social Media</h4>
          <ul>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#instagram">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;