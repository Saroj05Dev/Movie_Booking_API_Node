const Movie = require('../models/movie.model');
const movieService = require('../services/movie.service');

/**
 * Controller function to create a new movie
 * @param {*} req {movie details in request body}
 * @param {*} res {response object}
 * @returns movie object in JSON format
 */

const errorResponseBody = {
    err: {},
    data: {},
    message: 'Something went wrong, please try again later',
    success: false
}

const successResponseBody = {
    err: {},
    data: {},
    message: 'Successfully processed request',
    success: true
}

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

const deleteMovie = async (req, res) => {
    try {
        const movieId = req.params._id;
        const movie = await Movie.deleteOne(movieId);
        return res.status(200).json({
            success: true,
            data: movie,
            message: 'Movie deleted successfully'
        });
    } catch (error) {
        console.error('Error creating movie:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
}

const getMovie = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await movieService.getMovieById(id);
        if(response.err) {
            errorResponseBody.err = response.err;
            return res.status(response.code).json(errorResponseBody);
        }
        successResponseBody.data = response;
        return res.status(200).json(successResponseBody);
    } catch (err) {
        console.error('Error creating movie:', err);
        return res.status(500).json(errorResponseBody);
    }
}

module.exports = {
    createMovie,
    deleteMovie,
    getMovie
}