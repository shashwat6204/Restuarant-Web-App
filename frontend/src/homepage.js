// Homepage.js

import React from 'react';
import backgroundImage from './images/Mbackgroundimg.jpg'; // Update the path based on your directory structure
import Navbar from './components/navbar';
import Footer from './components/footer';
import './index.css';

const Homepage = () => {

  return (
    <div>
      <div className="font-sans bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '100vh'}}>
        
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        
        <header className="bg-gray-800 text-white text-center py-4 relative z-10">
          <Navbar />
        </header>
      </div>

      <footer className="bg-gray-800 text-white text-center py-4 relative z-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Homepage;
