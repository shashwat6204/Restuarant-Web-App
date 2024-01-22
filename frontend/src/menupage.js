// MenuPage.js

import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './reservation.css';

// Import images
import tomatoBruschettaImage from './images/tomato_bruschetta.jpeg';
import capreseSaladImage from './images/caprese_salad.jpeg';
import prosciuttoMelonImage from './images/prosciutto_melon.jpeg';
import croissantImage from './images/croissant.jpg';
import spaghettiCarbonaraImage from './images/spaghetti_carbonara.jpeg';
import mushroomRisottoImage from './images/mushroom_risotto.png';
import ossoBucoImage from './images/osso_buco.png';
import saltimboccaImage from './images/saltimbocca.png';
import bakedFishImage from './images/baked_fish.jpg';
import tiramisuImage from './images/tiramisubg.jpg';
import sicilianCannoliImage from './images/sicilian_cannoli.png';
import pannaCottaImage from './images/panna_cotta.png';

const MenuPage = () => {
  // Sample Italian menu data
  const italianMenu = [
    {
      category: 'Starters',
      items: [
        { name: 'Tomato Bruschetta', price: '$10.99', image: tomatoBruschettaImage },
        { name: 'Caprese Salad', price: '$12.99', image: capreseSaladImage },
        { name: 'Prosciutto and Melon', price: '$14.99', image: prosciuttoMelonImage },
      ],
    },
    {
      category: 'First Courses',
      items: [
        { name: 'Croissant', price: '$15.99', image: croissantImage },
        { name: 'Spaghetti Carbonara', price: '$14.99', image: spaghettiCarbonaraImage },
        { name: 'Mushroom Risotto', price: '$16.99', image: mushroomRisottoImage },
      ],
    },
    {
      category: 'Main Courses',
      items: [
        { name: 'Osso Buco', price: '$28.99', image: ossoBucoImage },
        { name: 'Saltimbocca alla Romana', price: '$24.99', image: saltimboccaImage },
        { name: 'Baked Fish', price: '$26.99', image: bakedFishImage },
      ],
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Tiramisu', price: '$9.99', image: tiramisuImage },
        { name: 'Sicilian Cannoli', price: '$8.99', image: sicilianCannoliImage },
        { name: 'Panna Cotta', price: '$7.99', image: pannaCottaImage },
      ],
    },
  ];

  return (
    <div className="font-sans bg-gray-100">
      {/* Navbar Component */}
      <header className="bg-gradient-to-r from-primary to-secondary bg-gray-800 text-white text-center py-4 relative z-10">
        <Navbar />
      </header>

      {/* Menu Section */}
      <section className="p-40 bg-yellow-200 bg-opacity-95 shadow-md rounded-md">
        <h2 className="text-4xl font-bold mb-8 text-accent">Our Menu (Il Nostro Menù)</h2>

        {/* Menu Categories */}
        {italianMenu.map((category) => (
          <div key={category.category} className="mb-4">
            <h3 className="text-2xl font-bold mb-2 text-primary">{category.category}</h3>
            {/* Menu Items */}
            <div className="flex flex-wrap">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="w-full md:w-1/3 flex flex-col items-center mb-2 text-gray-700"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-48 h-48 object-cover rounded-md mb-2"
                  />
                  {/* Item Details */}
                  <p className="font-bold">{item.name}</p>
                  <p className="text-accent">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Footer Component */}
      <footer className="bg-gray-800 text-white text-center py-4 relative z-10">
        <Footer />
      </footer>
    </div>
  );
};

export default MenuPage;
