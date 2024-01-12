import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="logo">
          <h1 className="text-2xl font-bold">Delicious Eats</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:underline">Home</li>
            <li className="hover:underline">Menu</li>
            <li className="hover:underline">Specials</li>
            <li className="hover:underline">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
