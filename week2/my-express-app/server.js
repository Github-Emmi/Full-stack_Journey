// server.js - Your first web server!

// 1. Import Express (like calling your waiter to work)
const express = require('express');

// 2. Create Express application (the restaurant opens!)
const app = express();

// 3. Define the port (your restaurant's address)
const PORT = 3000;

// ===== ROUTES ===== (Your menu items)

// Homepage route - like the restaurant entrance
app.get('/', (req, res) => {
  // req = Request (what the customer asked for)
  // res = Response (what you give back to customer)
  res.send(`
    <h1>Welcome to My Express Server! 🚀</h1>
    <p>Your server is running successfully!</p>
    <ul>
      <li><a href="/books">View Books</a></li>
      <li><a href="/api/health">Server Health</a></li>
    </ul>
  `);
});

// Books API route - like a specific menu section
app.get('/books', (req, res) => {
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
  ];
  
  // Send JSON response (API format)
  res.json({
    success: true,
    data: books,
    count: books.length
  });
});

// Health check route - like checking if kitchen is operational
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Server is healthy!',
    timestamp: new Date().toISOString(),
    uptime: `${process.uptime().toFixed(2)} seconds`
  });
});

// 4. Start the server (open restaurant for business!)
app.listen(PORT, () => {
  console.log(`🎉 Server running at: http://localhost:${PORT}`);
  console.log(`📚 Books API: http://localhost:${PORT}/books`);
  console.log(`❤️ Health Check: http://localhost:${PORT}/api/health`);
});


