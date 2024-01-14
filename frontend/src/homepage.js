// Homepage.js

import React, { useEffect, useState } from 'react';
import backgroundImage from './images/Mbackgroundimg.jpg';
import featuredDish from './images/croissant.jpg';
import background from './images/background.jpg';
import chefspecial from './images/tiramisubg.jpg';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './index.css';

const Homepage = () => {
  const [typedText, setTypedText] = useState('');
  const welcomeText = "Welcome to Maple Leaf! Discover culinary enchantment where every bite tells a story of passion and flavor. Our artisanal menu promises a journey through taste. Join us in a cozy ambiance, where warmth meets innovation."

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText((prevText) => prevText + welcomeText[index]);
      index++;

      if (index === welcomeText.length) {
        clearInterval(typingInterval);
      }
    }, 20);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div>
      <div
        className="bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '100vh' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="text-3xl text-green-100 font-extrabold mx-8 animate__animated animate__fadeIn">
            {typedText}
           
          </div>
        </div>

        <header className="bg-gradient-to-r from-primary to-secondary bg-gray-800 text-white text-center py-4 relative z-10">
          <Navbar />
        </header>
      </div>
      <section
        id="featured-dish"
        className="mt-1">
        <h2 className="text-2xl font-bold mb-1 text-white">Featured Dish</h2>
        <div className="bg-white shadow-md p-6 rounded-md flex items-center" style={{  backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100px' }}>
        <img src={featuredDish}  alt="Featured Dish"  className="w-24 h-24 object-cover rounded-full border-4 border-yellow-300"/>
          <div> 
            <p className="text-4xl text-yellow-300 font-semibold mb-2"> Croissant</p>
            <p className="text-2xl text-cyan-200"> Flaky layers of golden delight, the croissant unveils a buttery symphony in every irresistible bite.</p>
          </div>
        </div>
      </section>
      <section
        id="menu"
        className="mt-1 mb-4">
        <h2 className="text-2xl font-bold mb-1 text-white" >Chef's Special</h2>
        <div className="bg-white shadow-md p-6 rounded-md flex items-center" style={{  backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100px' }}>
        <img src={chefspecial}  alt="Featured Dish"  className="w-24 h-24 object-cover rounded-full border-4 border-yellow-300"/>
        <div>
         <p className="text-4xl text-yellow-300 font-semibold mb-2">Tiramisu</p>
         <p className="text-2xl text-cyan-200">A velvety symphony of coffee-soaked ladyfingers, mascarpone richness, and cocoa dust.</p>
        </div>
        </div>
      </section>
      <footer className="bg-gray-800 text-white text-center py-4 relative z-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Homepage;
