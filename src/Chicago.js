import React from 'react';
import './Chicago.css';

function Chicago() {
  return (
    <section className="chicago-container" id="about">
      <div className="chicago-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional 
          recipes served with a modern twist. Founded by brothers Mario and Adrian, 
          Little Lemon brings the authentic flavors of our Italian and Greek heritage 
          straight to your table. From our famous Greek salad to our artisan bruschetta, 
          every dish is crafted with love, fresh ingredients, and a passion for 
          great food.
        </p>
      </div>

      <div className="chicago-images">
        {/* Placeholder images representing the restaurant/chefs */}
        <img 
          src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&q=80" 
          alt="Chef cooking" 
          className="chicago-img-1" 
        />
        <img 
          src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=500&q=80" 
          alt="Restaurant interior" 
          className="chicago-img-2" 
        />
      </div>
    </section>
  );
}

export default Chicago;