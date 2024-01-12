// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components/pages
import HomePage from './homepage';
import MenuPage from './menupage';
import ReservationPage from './ReservationPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
