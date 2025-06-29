import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const API_KEY = 'fc91bf4'; // Replace with your OMDb API key

function MovieList({ search }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!search) return;
    setLoading(true);

    fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.Search || []);
        setLoading(false);
      });
  }, [search]);
  
  return (
    <div className='m-2 '>
      {loading && <p className='h-screen flex justify-center  items-center '>Loading...</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
