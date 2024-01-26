// ReservationPage.js
import axios from 'axios';
import React, { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './reservation.css'; // Import the external stylesheet

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

  // Example using axios
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/reservation', formData);
      console.log('Reservation submitted:', formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
      });
      window.alert('Reservation submitted successfully!');
    } catch (error) {
      console.error('Error submitting reservation:', error);
      window.alert('Error submitting reservation. Please try again.');
    }
  };

  return (
    <div className="font-sans">
      {/* Navbar Component */}
      <header className="bg-black text-white py-2">
        <Navbar />
      </header>

      {/* Reservation Form Section */}
      <section className="container mx-auto flex items-center justify-center mt-8">
        <div className="form-container">
          <h2 className="text-3xl font-bold mb-6">Make a Reservation</h2>

          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="form-group">
              <label htmlFor="name" className="block text-gray-600">
                Name
              </label>
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
            <div className="form-group">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
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
            <div className="form-group">
              <label htmlFor="phone" className="block text-gray-600">
                Phone
              </label>
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
            <div className="form-group">
              <label htmlFor="date" className="block text-gray-600">
                Date
              </label>
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
            <div className="form-group">
              <label htmlFor="time" className="block text-gray-600">
                Time
              </label>
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
            <div className="form-group">
              <label htmlFor="guests" className="block text-gray-600">
                Number of Guests
              </label>
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
              className="submit-btn"
            >
              Book Table
            </button>
          </form>
        </div>
      </section>

      {/* Footer Component */}
      <footer className="bg-black text-white text-center py-2 relative z-10">
        <Footer />
      </footer>
    </div>
  );
};

export default ReservationPage;
