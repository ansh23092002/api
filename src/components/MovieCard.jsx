import React from 'react';
import { Link } from 'react-router-dom';



function MovieCard({ movie }) {


  return (


    // Route link for faster navigation 

    <Link to={`/movie/${movie.imdbID}`} className="block border p-2 rounded shadow hover:shadow-lg hover:bg-zinc-400 ">
     
      {/* single MovieCard by the uniqe Id */}
      
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
        alt={movie.Title}
        className="w-full h-60 object-cover"
      />
      <h2 className="text-md font-semibold mt-2 justify-center flex">{movie.Title}</h2>
      <p className='justify-center flex'>{movie.Year}</p>
    
    </Link> 
  );
}

export default MovieCard;
