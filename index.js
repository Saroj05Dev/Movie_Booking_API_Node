const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const mongoose = require('mongoose');

env.config(); // Load environment variables from .env file
const app = express(); // express app object



app.use(bodyParser.json()); // Middleware to parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies

app.get('/home', (req, res) => {
    // Callback function to run when the route is hit
    return res.json({
        success: true
    })
})

app.listen(process.env.PORT, async () => {
    // Callback function to run when the server starts
    console.log(`Server is running on port ${process.env.PORT}`);

    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to the database successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
    
});