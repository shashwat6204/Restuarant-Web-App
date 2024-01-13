import React from 'react';
import logo from '../images/logo.png';
import backgroundImage from '../images/Mbackgroundimg.jpg';

const Navbar = () => {
  return (
    <header className="relative text-white p-4">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center filter blur-md"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
      </div>

      <div className="container mx-auto flex items-center justify-between relative z-10">
        <div className="logo rounded-full overflow-hidden">
          <img src={logo} alt="Delicious Eats Logo" className="h-14 w-14 object-cover" />
        </div>
        <h1 className="text-3xl font-bold text-yellow-500 ml-4">Maple Leaf 
        <div className="ml-2 animate-spin inline-block w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="ml-2 animate-ping inline-block w-3 h-3 bg-yellow-500 rounded-full"></div>
        </h1>
        <nav className="lg:flex hidden">
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
