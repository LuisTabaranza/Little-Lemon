import React from 'react';
import Logo from './Assets/Logo.svg';

function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-box">
          <img src={Logo} alt="Little Lemon Logo" className="nav-logo" />
        </div>
        <ul className="nav-links">
          <li><a href="/">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#menu">MENU</a></li>
          <li><a href="#reservations">RESERVATIONS</a></li>
          <li><a href="#order">ORDER ONLINE</a></li>
          <li><a href="#login">LOGIN</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;