import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = 'fc91bf4'; // OMDb API key

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isFavorited,setisFavorited] = useState(false );
 
 

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);


  // checking the condition that if movie is selected as a favorited list the it will be selected initially
  useEffect(() => {
      for (let i = 0; i <localStorage.length; i++) {
        
          const val = localStorage.key(i);
          if(val == id){
            setisFavorited(true)
          }
          
        }  
  }, []);
    
    
// condinton for selcting favorite list
    const handlFavorite=()=>{
   
    if(isFavorited=== false){
      
      localStorage.setItem(id,movie.Title);

      setisFavorited(true);
    }else{
      setisFavorited(false);
      localStorage.removeItem(id,movie.Title);

    }
  };

  if (!movie) return <p className=' flex h-screen bg-black justify-center  items-center'>Loading...</p>;

  return (
    <div className="p-4  flex-col flex justify-center items-center text-white bg-black h-screen w-full lg:h-screen md:h-screen"> 
      <img src={movie.Poster} alt={movie.Title} className="w-60 mb-4" />
      <h1 className="text-2xl font-bold">{movie.Title}</h1>
      <div className='flex flex-col justify-center items-center lg:m  x-30 pb-4'>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      </div>
      <button onClick={handlFavorite} className='bg-zinc-400 p-3 rounded-3xl'> {isFavorited ? '❤️ Favorited' : '🤍 Add to Favorites'}</button>
    </div>
  );
}

export default Details;
