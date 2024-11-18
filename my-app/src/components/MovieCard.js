import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card" style={{ position: 'relative', margin: '10px', width: '250px' }}>
      <div className="image-container" style={{
        width: '100%',
        height: '300px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* effet souris */}
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
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)'; 
            e.target.nextElementSibling.style.display = 'flex';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)'; 
            e.target.nextElementSibling.style.display = 'none';
          }}
        />
        

        <a
          href={movie.trailerUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle"
          style={{
            fontSize: '50px',
            color: 'white',
            display: 'none',
            cursor: 'pointer',
          }}
        >
          <i className="fas fa-play-circle"></i>
        </a>
      </div>
      <div className="movie-info" style={{ padding: '10px 0', textAlign: 'center' }}>
        <h5>{movie.title}</h5>
        <p>{movie.description}</p>
        <p><strong>Rating:</strong> {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
