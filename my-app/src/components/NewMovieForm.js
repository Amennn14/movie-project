import React, { useState } from 'react';

const NewMovieForm = ({ closeForm, addMovie }) => {
  const [movieData, setMovieData] = useState({
    title: '',
    description: '',
    image: '',
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMovieData((prevData) => ({ ...prevData, [name]: name === 'rating' ? Number(value) : value }));
  };

  const submitMovie = () => {
    addMovie(movieData);
    closeForm();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div className="card p-4" style={{ width: '350px' }}>
        <h3 className="text-center text-primary">Add Movie</h3>
        <input className="form-control mb-2" type="text" name="title" placeholder="Title" onChange={handleInputChange} />
        <input className="form-control mb-2" type="text" name="description" placeholder="Description" onChange={handleInputChange} />
        <input className="form-control mb-2" type="text" name="image" placeholder="Image URL" onChange={handleInputChange} />
        <input className="form-control mb-2" type="number" name="rating" placeholder="Rating" onChange={handleInputChange} />
        <div className="text-center">
          <button className="btn btn-primary mr-2" onClick={submitMovie}>Save Movie</button>
          <button className="btn btn-secondary" onClick={closeForm}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default NewMovieForm;
