// ReservationPage.js

import React, { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './index.css';

const ReservationPage = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your reservation submission logic here
    console.log('Reservation submitted:', formData);
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
    });
  };

  return (
    <div className="font-sans bg-gray-100">
      {/* Navbar Component */}
      <header className="bg-gradient-to-r from-primary to-secondary bg-gray-800 text-white text-center py-4 relative z-10">
        <Navbar />
      </header>

      {/* Reservation Form Section */}
      <section className="container mx-auto flex items-center justify-center mt-8">
        <div className="w-full md:w-1/2 p-8 bg-white shadow-md rounded-md">
          <h2 className="text-3xl font-bold mb-6">Make a Reservation</h2>
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Phone Input */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-600">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Date Input */}
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-600">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Time Input */}
            <div className="mb-4">
              <label htmlFor="time" className="block text-gray-600">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Guests Input */}
            <div className="mb-4">
              <label htmlFor="guests" className="block text-gray-600">Number of Guests</label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-accent text-white px-4 py-2 rounded-md hover:bg-secondary"
            >
              Submit Reservation
            </button>
          </form>
        </div>
      </section>

      {/* Footer Component */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <Footer />
      </footer>
    </div>
  );
};

export default ReservationPage;
