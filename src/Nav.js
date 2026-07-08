import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Assets/Logo.svg';

function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-box">
          <Link to="/">
            <img src={Logo} alt="Little Lemon Logo" className="nav-logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li><a href="/#about">ABOUT</a></li>
          <li><a href="#menu">MENU</a></li>
          <li><Link to="/reservations">RESERVATIONS</Link></li>
          <li><Link to="/order">ORDER ONLINE</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;