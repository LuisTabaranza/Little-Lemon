# Little Lemon Restaurant - Table Reservation App

A responsive React web application built for Little Lemon Restaurant. This application allows users to view the menu, read testimonials, and book a table using a robust, validated reservation system.

## 🚀 Features
* **Interactive Booking System:** Users can select dates, times, guest counts, and occasions.
* **Client-Side Validation:** Ensures data integrity by preventing past date selections and invalid guest counts using HTML5 and React state management.
* **State Management:** Utilizes `useReducer` to dynamically fetch available times based on the selected date.
* **Data Persistence:** Saves upcoming reservations to the browser's `localStorage` so users don't lose their data on refresh.
* **Fully Accessible:** Built with semantic HTML, ARIA attributes, and proper form labeling for screen reader compatibility.
* **Responsive Design:** CSS Grid and Flexbox ensure the layout adapts beautifully from desktop to mobile screens.

## 🛠️ Tech Stack
* **Framework:** React.js (Create React App)
* **Routing:** React Router v6
* **Testing:** Jest & React Testing Library
* **Styling:** CSS3

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/LuisTabaranza/Little-Lemon.git
