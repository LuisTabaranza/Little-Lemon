import React from 'react';
import Header from './Header'; 
import Specials from './Specials';
import CustomersSay from './CustomersSay'; 
import Chicago from './Chicago'; // Import the final section

function HomePage() {
  return (
    <>
      <Header />
      <Chicago /> {/* The Homepage is now fully assembled! */}
      <Specials />
      <CustomersSay />
    </>
  );
}

export default HomePage;