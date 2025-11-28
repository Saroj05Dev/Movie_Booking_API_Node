const mongoose = require('mongoose');

/**
 * Define the schema of the movie resource to be stored in the database
 */

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    casts: {
        type: [String],
        required: true
    },

    trailerUrl: {
        type: String,
        required: true
    },

    genre: {
        type: String,
        required: true
    },

    rating: {    
        type: Number,
        required: true
    },

    language: {
        type: String,
        required: true,
        default: 'English'
    },

    releaseDate: {
        type: String,
        required: true
    },

    director: {
        type: String,
        required: true
    },

    releaseStatus: {
        type: String,
        enum: ['RELEASED', 'COMING_SOON', 'BLOCKED'],
        required: true
    }
}, {
    timestamps: true
});

const Movie = mongoose.model('Movie', movieSchema); // Create a Mongoose model named 'Movie' using the defined schema

module.exports = Movie;