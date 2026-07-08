import React from 'react';
import './CustomersSay.css';

const testimonials = [
  {
    id: 1,
    rating: "⭐⭐⭐⭐⭐",
    name: "Sara L.",
    review: "The Greek salad was incredibly fresh. Definitely my new favorite lunch spot!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
  },
  {
    id: 2,
    rating: "⭐⭐⭐⭐⭐",
    name: "Alex M.",
    review: "Awesome atmosphere and the Lemon Dessert tastes exactly like an authentic recipe.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
  },
  {
    id: 3,
    rating: "⭐⭐⭐⭐",
    name: "John D.",
    review: "Great service and delicious bruschetta. I will definitely be coming back with friends.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80"
  },
  {
    id: 4,
    rating: "⭐⭐⭐⭐⭐",
    name: "Elena R.",
    review: "Unbelievable flavors! Ordering online via the delivery button was seamless.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
  }
];

function CustomersSay() {
  return (
    <section className="testimonials-container">
      <h2>What our customers say!</h2>
      
      <div className="testimonials-grid">
        {testimonials.map((profile) => (
          <div key={profile.id} className="testimonial-card">
            <div className="stars">{profile.rating}</div>
            <div className="user-info">
              <img src={profile.image} alt={profile.name} className="user-avatar" />
              <h3>{profile.name}</h3>
            </div>
            <p className="review-text">"{profile.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;