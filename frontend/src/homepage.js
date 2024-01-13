// Homepage.js

import React from 'react';
import backgroundImage from './images/Mbackgroundimg.jpg'; // Update the path based on your directory structure
import Navbar from './components/navbar';
import Footer from './components/footer';
import './index.css'; // Create a separate CSS file for Homepage styling

const Homepage = () => {
  // Sample data for Chef's Recommendations

  return (
    <div>
      {/* Background Image with Translucent Overlay */}
      <div
        className="font-sans bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          minHeight: '100vh',
        }}
      >
        {/* Overlay for Translucent Effect */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Navbar */}
        <header className="bg-gray-800 text-white text-center py-4 relative z-10">
          <Navbar />
        </header>

        {/* Navigation */}
        <nav className="bg-gray-700 text-white py-2 relative z-10">
          <ul className="flex justify-center space-x-4">
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* ... (additional sections if needed) */}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-8 relative z-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Homepage;
