const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());  // Enable CORS
app.use(express.json());  // Middleware for parsing JSON bodies

// Sample data (in-memory storage)
let addresses = [];

// Route to save a new address
app.post('/api/address', (req, res) => {
  const address = req.body;
  address.id = Date.now().toString();  // Assign a unique ID
  addresses.push(address);
  res.status(201).json(address);
});

// Route to fetch all addresses
app.get('/api/address', (req, res) => {
  res.status(200).json(addresses);
});

// Route to delete an address by ID
app.delete('/api/address/:id', (req, res) => {
  const { id } = req.params;
  addresses = addresses.filter(addr => addr.id !== id);
  res.status(200).send('Address deleted');
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Backend is running on http://localhost:${PORT}`));
