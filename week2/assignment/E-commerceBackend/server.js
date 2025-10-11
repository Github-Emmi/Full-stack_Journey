// server.js - The foundation of our API

// 1. IMPORT DEPENDENCIES - Like gathering tools for a construction project
const express = require('express');
const bodyParser = require('body-parser');
// const { v4: uuidv4 } = require('uuid');

// 2. CREATE EXPRESS APPLICATION - Like opening a new restaurant
const app = express();

// 3. CONFIGURE PORT - Our API's "address"
const PORT = process.env.PORT || 3000;


// import route
const productRoutes = require('./routes/routes');

// initiate the
app.use(productRoutes);

// ===== MIDDLEWARE SETUP =====
// 4. Body Parser Middleware - Teaches Express to read JSON from requests
app.use(bodyParser.json());
// This allows our API to understand JSON data sent from clients

// ===== BASIC ROUTES =====
// 5. Root Route - Like the welcome sign at our restaurant entrance
app.get('/api/home', (req, res) => {
  // req = Request object (what client sends us)
  // res = Response object (what we send back)
  res.send({
    message: '🛍️ Welcome to Products API!',
    version: '1.0.0',
    endpoints: {
      products: '/api/products',
      health: '/api/health'
    },
    timestamp: new Date().toISOString()
  });
});

// 6. Health Check Route - Like a "heartbeat monitor" for our API
app.get('/api/health', (req, res) => {
  res.json({
    status: '✅ Healthy',
    uptime: `${process.uptime().toFixed(2)} seconds`,
    timestamp: new Date().toISOString()
  });
});



// ===== START SERVER =====
// 7. Start listening for requests - Like opening doors for business!
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Local: http://localhost:${PORT}`);
  console.log(`❤️ Health Check: http://localhost:${PORT}/api/health`);
});
