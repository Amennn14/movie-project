import React, { useState } from 'react';
import MovieDisplay from './components/MovieDisplay';
import MovieSearch from './components/MovieSearch';
import NewMovieForm from './components/NewMovieForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  <div className="app-background"></div>
  const [movieCollection, setMovieCollection] = useState([
    { title: 'HANNIBAL', description: 'Gifted criminal profiler Will Graham has a unique way of thinking that allows him to empathize with anyone, including psychopaths. But while helping the FBI pursue a particularly complicated serial killer, he decides he could use some help and enlists the brilliant psychiatrist Hannibal Lecter. The two form a partnership and it seems that there is no villain they cant catch together, but Lecter harbors a dark secret. His own brilliant mind has gone to the dark side and he has more in common with the criminals they hunt than Will could possibly imagine.', image: 'https://upload.wikimedia.org/wikipedia/en/8/85/Hannibal_season_1.png ', rating: 7 },
    { title: 'NARCOS', description: 'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.', image: 'https://m.media-amazon.com/images/M/MV5BNzQwOTcwMzIwN15BMl5BanBnXkFtZTgwMjYxMTA0NjE@._V1_QL75_UX190_CR0,0,190,281_.jpg', rating: 9 },
  ]);

  const [searchCriteria, setSearchCriteria] = useState({ title: '', minRating: 0 });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const addNewMovie = (movie) => {
    setMovieCollection([...movieCollection, movie]);
  };

  const filteredMovies = movieCollection.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchCriteria.title.toLowerCase()) &&
      movie.rating >= searchCriteria.minRating
  );

  return (
    <div className="container my-5">
      <h1 className="text-center text-danger">NEFTLIX</h1>
      <MovieSearch setSearchCriteria={setSearchCriteria} />
      <div className="text-center mb-3">
        <button className="btn btn-danger" onClick={() => setIsFormVisible(true)}>Add New Movie</button>
      </div>
      {isFormVisible && <NewMovieForm closeForm={() => setIsFormVisible(false)} addMovie={addNewMovie} />}
      <MovieDisplay movies={filteredMovies} />
    </div>
  );
};

export default App;
