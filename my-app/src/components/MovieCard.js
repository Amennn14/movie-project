import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card" style={{ margin: '10px', width: '250px' }}>
      <div className="image-container" style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
        <img
          src={movie.image}
          alt={movie.title}
          className="img-fluid"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            cursor: 'pointer',
            transition: 'transform 0.3s ease-in-out',
          }}
        />
      </div>

      {}
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
        <div className="movie-info" style={{ padding: '10px 0', textAlign: 'center' }}>
          <h5>{movie.title}</h5>
          <p>{movie.description}</p>
          <p><strong>Rating:</strong> {movie.rating}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
