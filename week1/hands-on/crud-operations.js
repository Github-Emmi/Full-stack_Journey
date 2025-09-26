// Create database and collections
// use LibraryDB;

// Create collections with validation
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email"],
      properties: {
        name: { bsonType: "string" },
        email: { bsonType: "string" },
        age: { bsonType: "int", minimum: 0 }
      }
    }
  }
});

// Run this in mongo shell: load('scripts/01-setup-database.js')



print("✅ Database setup completed!");
// Exercise: E-commerce Analytics
javascript
// File: exercises/exercise-3-aggregation-practice.js
// TODO: Write aggregation to find:
// 1. Top 3 customers by total spending
// 2. Most popular product categories
// 3. Average order value by payment method