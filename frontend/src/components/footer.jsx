import React from 'react';
import backgroundImage from '../images/Mbackgroundimg.jpg';

function Footer() {
  return (
    <footer className="relative bg-gray-800 bg-opacity-50 text-white text-lg p-4 text-center">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center filter blur-md"
        style={{ backgroundImage: `url(${backgroundImage})` }}></div>

      <div className="container mx-auto relative z-10">
      <span class="text-md text-white-500 sm:text-center dark:text-white-400">© 2023 <a href="http://localhost:3000/" class="hover:underline">Maple Leaf™</a>. All Rights Reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
