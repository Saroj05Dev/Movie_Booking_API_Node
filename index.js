const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const mongoose = require('mongoose');
const MovieRoutes = require('./routes/movie.routes');

env.config(); // Load environment variables from .env file
const app = express(); // express app object


app.use(bodyParser.json()); // Middleware to parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies

MovieRoutes(app); // Register/invoke movie routes with the express app

app.get('/home', (req, res) => {
    // Callback function to run when the route is hit
    return res.json({
        success: true
    })
})

app.listen(process.env.PORT, async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to the database successfully');

        console.log(`Server is running on port ${process.env.PORT}`);

        // await Movie.create({
        //     name: "Inception",
        //     description: "A mind-bending thriller about dream invasion.",
        //     casts: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
        //     trailerUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        //     language: "English",
        //     genre: "Thriller",
        //     rating: 8.8,
        //     releaseDate: "2010-07-16",
        //     director: "Christopher Nolan",
        //     releaseStatus: "RELEASED"
        // })
    } catch (error) {
        console.error('Database connection failed:', error);
    }

});