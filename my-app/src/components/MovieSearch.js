import React from 'react';

const MovieSearch = ({ setSearchCriteria }) => {
  const updateTitle = (e) => {
    setSearchCriteria(prev => ({ ...prev, title: e.target.value }));
  };

  const updateRating = (e) => {
    setSearchCriteria(prev => ({ ...prev, minRating: Number(e.target.value) }));
  };

  return (
    <div className="d-flex justify-content-center mb-4">
      <input className="form-control mx-2 w-25" type="text" placeholder="Search by Title" onChange={updateTitle} />
      <input className="form-control mx-2 w-25" type="number" placeholder="search by Rating" onChange={updateRating} />
    </div>
  );
};

export default MovieSearch;
