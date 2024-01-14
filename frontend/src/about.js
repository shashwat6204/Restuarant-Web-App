import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './index.css';

const AboutUsPage = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Navbar Component */}
      <header className="bg-gradient-to-r from-primary to-secondary text-white py-4">
        <Navbar />
      </header>

      {/* About Us Section */}
      <section className="container mx-auto mt-8 p-8 bg-white shadow-md rounded-md">
        <h2 className="text-4xl font-bold mb-6 text-accent">Welcome to Maple Leaf</h2>
        <p className="text-gray-700 mb-4">
          Indulge in a culinary journey at Maple Leaf, where each dish is a masterpiece. We are
          dedicated to providing an exquisite dining experience, celebrating flavors, artful
          presentation, and the joy of creating memorable moments with our guests.
        </p>

        <p className="text-gray-700 mb-4">
          Our chefs are culinary artists, transforming fresh, quality ingredients into delightful
          creations. With passion and expertise, every dish is carefully crafted to offer a
          captivating fusion of flavors that will enchant your senses.
        </p>

        <p className="text-gray-700 mb-4">
          Join us at Maple Leaf and savor the extraordinary. Whether it's a romantic dinner, a
          family celebration, or a casual get-together with friends, our restaurant is the perfect
          backdrop for creating beautiful memories through the love of food.
        </p>

        <div className="border-t-2 border-gray-300 mt-6 pt-6">
          <p className="text-gray-700 mb-2">
            <span className="font-semibold text-accent">Address:</span> 15th Cross, Whitefield,
            Bengaluru, Karnataka 560001
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold text-accent">Email:</span> info@mapleleaf.com
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-accent">Phone:</span> (123) 456-7890
          </p>
        </div>
      </section>

      {/* Footer Component */}
      <footer className="bg-gray-800 text-white text-center py-4 relative z-10">
        <Footer />
      </footer>
    </div>
  );
};

export default AboutUsPage;
