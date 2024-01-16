const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection (replace 'your_database_url' with your MongoDB connection string)
mongoose.connect('mongodb://your_username:your_password@your_cluster.mongodb.net/your_database', {
  useNewUrlParser: true, // Optional, but no longer needed in recent versions
  useUnifiedTopology: true, // Optional, but no longer needed in recent versions
  useCreateIndex: true, // New option to handle index creation
  useFindAndModify: false // New option to handle deprecated methods
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Reservation Schema
const reservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  time: String,
  guests: Number,
});

const Reservation = mongoose.model('Reservation', reservationSchema);

// API Endpoint to Handle Reservation Submissions
app.post('/api/reservations', async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(201).json({ message: 'Reservation submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
