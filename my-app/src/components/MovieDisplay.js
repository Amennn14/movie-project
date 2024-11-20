import React from 'react';
import MovieCard from './MovieCard';

const MovieDisplay = ({ movies }) => {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieDisplay;