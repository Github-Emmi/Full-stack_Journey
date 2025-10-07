// load .env files
require('dotenv').config();

// import database connection
const connectDB = require('./config/database')

// import express framework
const express = require('express');
const app = express();

// define port
const PORT = process.env.PORT || 3000;

// database connection
connectDB

// Middle ware set up
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic Routes

app.get('/home', (req, res) =>{
    // req = Request url incoming 
    // res = response to the data
    res.json({
        message: "Welcome to our Library!",
        timestamp: new Date().toISOString(),
        version: "testing"
    });

});

/// authors
app.get('/authors', (req, res) =>{
    res.status(200).json({
        status: 'Okay',
        health: 'Sucessful'
    })
})


app.listen(PORT, () =>{
    console.log(`Running server on port ${PORT}`);

});

module.exports = app;