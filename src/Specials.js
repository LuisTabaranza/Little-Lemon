import React from 'react';
import './Specials.css';

// Using placeholder images for standard menu items
const menuItems = [
  {
    id: 1,
    title: "Greek Salad",
    price: "$12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&q=80"
  },
  {
    id: 2,
    title: "Bruchetta",
    price: "$5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil, topped with fresh tomatoes.",
    image: "https://images.unsplash.com/photo-1572656631137-7935297eff55?w=500&q=80"
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: "$5.00",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&q=80"
  }
];

function Specials() {
  return (
    <section className="specials-container" id="menu">
      <div className="specials-header">
        <h2>This Weeks Specials!</h2>
        <button className="online-menu-btn">Online Menu</button>
      </div>

      <div className="specials-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="special-card">
            <img src={item.image} alt={item.title} className="special-image" />
            <div className="card-content">
              <div className="card-title-row">
                <h3>{item.title}</h3>
                <span className="card-price">{item.price}</span>
              </div>
              <p className="card-description">{item.description}</p>
              <button className="delivery-btn">
                Order a delivery <span>🚴</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;