const Movie = require('../models/movie.model');

/**
 * Controller function to create a new movie
 * @param {*} req {movie details in request body}
 * @param {*} res {response object}
 * @returns movie object in JSON format
 */

const createMovie = async (req, res) => {
    try {
        const movieData = req.body;
        const movie = await Movie.create(movieData);
        return res.status(201).json({
            success: true,
            data: movie,
            message: 'Movie created successfully'
        });
    } catch (error) {
        console.error('Error creating movie:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
}

module.exports = {
    createMovie
}