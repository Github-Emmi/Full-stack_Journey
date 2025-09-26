// Users with embedded orders (Good for limited order history)
db.users.insertOne({
  _id: 1,
  name: "John Doe",
  email: "john@example.com",
  // Embedded orders array
  orders: [
    { 
      orderId: "ORD-001",
      date: new Date("2024-01-15"),
      items: [
        { product: "Laptop", price: 1200, quantity: 1 },
        { product: "Mouse", price: 25, quantity: 2 }
      ],
      total: 1250
    }
  ]
});


// Separate collections with references
db.users.insertOne({
  _id: 1,
  name: "John Doe",
  email: "john@example.com"
});

db.orders.insertMany([
  {
    orderId: "ORD-001",
    userId: 1, // Reference to user
    date: new Date("2024-01-15"),
    items: [
      { product: "Laptop", price: 1200, quantity: 1 },
      { product: "Mouse", price: 25, quantity: 2 }
    ],
    total: 1250
  },
  {
    orderId: "ORD-002", 
    userId: 1,
    date: new Date("2024-01-20"),
    items: [
      { product: "Keyboard", price: 75, quantity: 1 }
    ],
    total: 75
  }
]);