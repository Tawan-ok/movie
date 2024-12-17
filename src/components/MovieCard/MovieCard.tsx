import React from 'react'
import './MovieCard.scss'
import { Link } from 'react-router-dom'

type Movie = {
    Poster: string;
    Title: string;
    Year: number;
    imdbID: string;
}

type MovieCardProps = {
    movie: Movie;
};

function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className='card'>
        <div className='card-image'>
            <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="card-content">
            <span className="card-title">{movie.Title}</span>
            <p>Year : {movie.Year}</p>
        </div>
        <div className="card-action">
            <Link to={`/movie/${movie.imdbID}`}>Read More</Link>
        </div>
    </div>
  )
}

export default MovieCard;
