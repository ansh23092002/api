import  { useState } from 'react';
import MovieList from '../components/MovieList';

import { Link } from 'react-router-dom';

function Home() {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    setSearch(query);
  };



  return (
    <div className="m-0 bg-black text-white ">
      <nav className='flex justify-between items-center  bg-black text-white'>

      <h1 className="text-xl font-bold m-2 text-yellow-500">Movie Explorer..</h1>  
      <Link to={"/FavoriteList"} className=' p-2 m-1 bg-white text-black rounded-4xl'  >❤️ Favorite  list</Link>

      </nav>
      <div className="flex mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="border p-2 flex-1 text-black  bg-white my-2 ml-1 rounded-3xl"
        />
        <button onClick={handleSearch} className="bg-blue-600 text-white p-2 rounded-3xl my-2 mx-1">Search</button>
      </div>
      <MovieList search={search} />
    </div>
  );
}

export default Home;
