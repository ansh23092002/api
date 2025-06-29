import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const API_KEY = 'fc91bf4'; // Replace with your OMDb API key

function FavoriteCard({ search }) {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!search) return;
    setLoading(true);

    fetch(`https://www.omdbapi.com/?i=${search}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => 
        setMovies(data),
        setLoading(false)
       
      );
  }, [search]);
  
  
  if (!movies) return <p className=' flex h-screen bg-black justify-center  items-center'>Loading...</p>;

  return (
    // <img
    //     src={movies.Poster !== 'N/A' ? movies.Poster : 'https://via.placeholder.com/150'}
    //     alt={movies.Title}
    //     className="w-full h-60 object-cover "
    //   />

    <div className='m-2 h-screen'>
      {loading && <p className='h-screen flex justify-center  items-center '>Loading...</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4  ">
        
          <MovieCard  movie={movies} />
     
      </div>
    </div>
  );
}

export default FavoriteCard;
