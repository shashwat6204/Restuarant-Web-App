// Homepage.js

import React from 'react';
import backgroundImage from './images/Background_img.jpeg'; // Update the path based on your directory structure
import Navbar from './components/navbar';
import Footer from './components/footer';
import './index.css'; // Create a separate CSS file for Homepage styling

const Homepage = () => {
  // Sample data for Chef's Recommendations
  const chefRecommendations = [
    {
      id: 1,
      name: 'Signature Dish 1',
      description: 'A delightful combination of flavors that will tantalize your taste buds.',
      price: '$19.99',
    },
    {
      id: 2,
      name: 'Specialty Dessert',
      description: 'Indulge in our heavenly dessert that will satisfy your sweet cravings.',
      price: '$8.99',
    },
    // Add more recommendations as needed
  ];

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

        {/* Chef's Recommendations Section */}
        <section id="chef-recommendations" className="mt-8 mx-4 relative z-10">
          <h2 className="text-2xl font-bold mb-4">Chef's Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {chefRecommendations.map((recommendation) => (
              <div key={recommendation.id} className="bg-white shadow-md p-6 rounded-md">
                <h3 className="text-lg font-semibold mb-2">{recommendation.name}</h3>
                <p className="text-gray-600 mb-2">{recommendation.description}</p>
                <p className="text-lg font-semibold">{recommendation.price}</p>
              </div>
            ))}
          </div>
        </section>

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
