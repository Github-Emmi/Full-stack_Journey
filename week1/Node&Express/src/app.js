// app.js
const { MongoClient } = require('mongodb');

// Connection URI
const uri = "mongodb://localhost:27017"; // or Atlas connection string

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("Connected to MongoDB");

    // Reference to the database
    const database = client.db('myblog');

    // Reference to the collection
    const posts = database.collection('posts');

    // Example: Insert a document
    const result = await posts.insertOne({
      title: "Node.js and MongoDB",
      content: "How to use MongoDB with Node.js",
      date: new Date()
    });
    console.log(`Inserted document with _id: ${result.insertedId}`);

  } finally {
    // Close the connection
    await client.close();
  }
}

main().catch(console.error);