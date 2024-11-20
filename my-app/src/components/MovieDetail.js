import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = ({ movieCollection }) => {
  const { id } = useParams();
  const movie = movieCollection.find((movie) => movie.id === id);
  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div className="movie-detail">
      <div className="card p-4">
        <h3 className="text-center text-primary">{movie.title}</h3>
        <img src={movie.image} alt={movie.title} className="img-fluid mb-3" />
        <p>{movie.description}</p>
        <iframe
          width="100%"
          height="400"
          src={movie.trailerUrl.replace("watch?v=", "embed/")}
          title={movie.title}
          allowFullScreen
        />
        <div className="text-center">
          <Link to="/" className="btn btn-secondary mt-3">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
