import React from 'react';
import './MovieList.scss';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';

type Movie = {
    imdbID: string;
    Poster: string;
    Title: string;
    Year:number
};

type RootState = {
    movieListing: {
        movies: Movie[];
    }
};

function MovieList() {
    const movies = useSelector((state: RootState) => state.movieListing.movies);

    return (
        <div className='movie-container'>
            {movies && movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </div>
    );
}

export default MovieList;
