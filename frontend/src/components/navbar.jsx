import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import backgroundImage from '../images/Mbackgroundimg.jpg';

const Navbar = () => {
  return (
    <header className="relative bg-gray-800 bg-opacity-50 text-white text-lg p-3 text-center">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center filter blur-md"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="container mx-auto flex items-center justify-between relative z-10">
        <div className="logo rounded-full overflow-hidden">
          <img src={logo} alt="Delicious Eats Logo" className="h-14 w-14 object-cover" />
        </div>
        <h1 className="text-4xl font-bold text-yellow-500 ml-4">
          <Link to="/">Maple Leaf</Link>
          <div className="ml-2 animate-spin inline-block w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="ml-2 animate-ping inline-block w-3 h-3 bg-yellow-500 rounded-full"></div>
        </h1>
        <nav className="lg:flex hidden">
          <ul className="flex space-x-6">
            <li className="hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="hover:underline">
              <Link to="/reservation">Reservation</Link>
            </li>
            <li className="hover:underline">
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
