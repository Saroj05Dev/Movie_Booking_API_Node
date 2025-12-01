const Movie = require('../models/movie.model');
const movieService = require('../services/movie.service');
const { errorResponseBody, successResponseBody } = require('../utils/responseBody');

/**
 * Controller function to create a new movie
 * @param {*} req {movie details in request body}
 * @param {*} res {response object}
 * @returns movie object in JSON format
 */


const createMovie = async (req, res) => {
    try {
        const movieData = req.body;
        const movie = await movieService.createMovie(movieData);
        successResponseBody.data = movie;
        successResponseBody.message = 'Movie created successfully';
        return res.status(201).json(successResponseBody);
    } catch (error) {
        console.error('Error creating movie:', error);
        return res.status(500).json(errorResponseBody);
    }
}

const deleteMovie = async (req, res) => {
    try {
        const response = await movieService.deleteMovie(req.params.id);
        successResponseBody.data = response;
        successResponseBody.message = 'Movie deleted successfully';
        return res.status(200).json(successResponseBody);
    } catch (error) {
        console.error('Error creating movie:', error);
        return res.status(500).json(errorResponseBody);
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