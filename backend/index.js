// Importing necessary modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dayDetailsRouter = require('./routes/day-details');

// Initializing app
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connecting to database
mongoose.connect('mongodb://localhost:27017/day-details-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to database');
}).catch((error) => {
  console.log('Error connecting to database:', error);
});

// Routes
app.use('/', );

// Starting server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
