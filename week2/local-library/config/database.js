// database configuration

const mongoose = require('mongoose');

const connectDB = async () =>{
    try{

        const options = {
            userNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeout: 5000, // 5 seconds
            bufferCommands: false
        };

        const conn = await mongoose.connect(process.env.MONGODB_URI, options);

        console.log (`Mongodb connected ${conn.connection.host}`);
        console.log(`database: ${conn.conection.name}`);

        // connection event
        mongoose.connection.on('error', (err) =>{
            console.error('Avaialable:', err);
        });

        mongoose.connection.on('disconnected', () =>{
            console.log('Mongodb disconnected')
        });
        
    } catch(error){
        console.error('database connection failed:', error.message);
        process.exit(1);
    }

};

module.exports = connectDB;