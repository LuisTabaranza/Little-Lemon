import React from 'react';
import heroImage from './Assets/restauranfood.jpg';

function Header() {
  return (
    <header className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional 
            recipes served with a modern twist.
          </p>
          <button className="cta-button">Reserve a Table</button>
        </div>
        <div className="hero-image-wrapper">
          <img src={heroImage} alt="Delicious Mediterranean food platter" className="hero-img" />
        </div>
      </div>
    </header>
  );
}

export default Header;