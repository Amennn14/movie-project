import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import MovieDisplay from './components/MovieDisplay';
import MovieSearch from './components/MovieSearch';
import NewMovieForm from './components/NewMovieForm';
import MovieDetail from './components/MovieDetail';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [movieCollection, setMovieCollection] = useState([
    {
      id: uuidv4(),
      title: 'HANNIBAL',
      description: 'Explores the early relationship between renowned psychiatrist Hannibal Lecter and a young FBI criminal profiler who is haunted by his ability to empathize with serial killers.',
      image: 'https://m.media-amazon.com/images/S/pv-target-images/ad9f4344282f5abc6ee02cb44eee26fe00dc631f73a32429619ecc9df2d6e542.jpg',
      rating: 7,
      trailerUrl: 'https://youtu.be/RuiklpUQ-p4',
    },
    {
      id: uuidv4(),
      title: 'NARCOS',
      description: 'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.',
      image: 'https://m.media-amazon.com/images/M/MV5BNzQwOTcwMzIwN15BMl5BanBnXkFtZTgwMjYxMTA0NjE@._V1_.jpg',
      rating: 9,
      trailerUrl: 'https://youtu.be/xl8zdCY-abw?si=vWn_nbCli6uRo988',
    },
  ]);

  const [searchCriteria, setSearchCriteria] = useState({ title: '', minRating: 0 });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const addNewMovie = (movie) => {
    setMovieCollection([...movieCollection, { ...movie, id: uuidv4() }]);
  };

  const filteredMovies = movieCollection.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchCriteria.title.toLowerCase()) &&
      movie.rating >= searchCriteria.minRating
  );

  return (
    <Router>
      <div className="container my-5">
        <h1 className="text-center text-danger">NEFTLIX</h1>
        <Routes>
          {}
          <Route
            path="/"
            element={
              <>
                <MovieSearch setSearchCriteria={setSearchCriteria} />
                <div className="text-center mb-3">
                  <button className="btn btn-danger" onClick={() => setIsFormVisible(true)}>Add New Movie</button>
                </div>
                {isFormVisible && (
                  <NewMovieForm closeForm={() => setIsFormVisible(false)} addMovie={addNewMovie} />
                )}
                <MovieDisplay movies={filteredMovies} />
              </>
            }
          />

          {}
          <Route
            path="/movie/:id"
            element={<MovieDetail movieCollection={movieCollection} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
