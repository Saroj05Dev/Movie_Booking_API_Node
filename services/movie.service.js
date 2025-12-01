const Movie = require('../models/movie.model');
const mongoose = require('mongoose');

const createMovie = async (movieData) => {
    const movie = await Movie.create(movieData);
    return movie;
}

const deleteMovie = async (id) => {
    await Movie.deleteOne({ _id: id });
};

const getMovieById = async (id) => {

    if (!mongoose.isValidObjectId(id)) {
        return {
            err: "Invalid movie ID format",
            code: 400
        };
    }

    const movie = await Movie.findById(id);

    if (!movie) {
        return {
            err: "Cannot find the movie with the given ID",
            code: 404
        };
    }

    return movie;
};

module.exports = { getMovieById, createMovie };
