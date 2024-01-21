import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './index.css';


const MenuPage = () => {
  // Sample Italian menu data
  const italianMenu = [
    {
      category: 'Starters',
      items: [  
        { name: 'Tomato Bruschetta', price: '$10.99' },
        { name: 'Caprese Salad', price: '$12.99' },
        { name: 'Prosciutto and Melon', price: '$14.99' },
      ],
    },
    {
      category: 'First Courses',
      items: [
        { name: 'Croissant', price: '$15.99' },
        { name: 'Spaghetti Carbonara', price: '$14.99' },
        { name: 'Mushroom Risotto', price: '$16.99' },
      ],
    },
    {
      category: 'Main Courses',
      items: [
        { name: 'Osso Buco', price: '$28.99' },
        { name: 'Saltimbocca alla Romana', price: '$24.99' },
        { name: 'Baked Fish', price: '$26.99' },
      ],
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Tiramisu', price: '$9.99' },
        { name: 'Sicilian Cannoli', price: '$8.99' },
        { name: 'Panna Cotta', price: '$7.99' },
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
      <section className="p-20 bg-white bg-opacity-95 shadow-md rounded-md">
        <h2 className="text-4xl font-bold mb-6 text-accent">Our Menu (Il Nostro Menù)</h2>

        {/* Menu Categories */}
        {italianMenu.map((category) => (
          <div key={category.category} className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">{category.category}</h3>
            {/* Menu Items */}
            {category.items.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center mb-2 text-gray-700"
              >
                <p>{item.name}</p>
                <p className="text-accent">{item.price}</p>
              </div>
            ))}
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
