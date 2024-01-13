import React from 'react';
import logo from '../images/logo.png'; // Replace with the actual path to your round logo image

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Round Logo */}
        <div className="logo rounded-full overflow-hidden">
          <img src={logo} alt="Delicious Eats Logo" className="h-12 w-12 object-cover" />
        </div>

        {/* Brand Name */}
        <h1 className="text-3xl font-bold text-yellow-500 ml-4">Delicious Eats</h1>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:underline">Home</li>
            <li className="hover:underline">Menu</li>
            <li className="hover:underline">Reservation</li>
            <li className="hover:underline">About us</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
