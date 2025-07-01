import { useState } from "react";
import MovieList from "../components/MovieList";

import { Link } from "react-router-dom";

function Home() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("new");

  const handleSearch = () => {
    setSearch(query);
  };

  return (
    <div className="m-0  bg-black text-white ">
      <nav className="flex justify-between items-center  bg-black text-white">
        <Link to ={"/"} className="text-xl font-bold m-2 text-yellow-500">
          Movie Explorer..
        </Link>
        <Link
          to={"/FavoriteList"}
          className=" p-2 m-1 bg-white text-black rounded-4xl"
        >
          ❤️ Favorite list
        </Link>
      </nav>

      <div className="flex mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="border p-2 flex-1 text-black  bg-white my-2 ml-1 rounded-3xl"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white p-2 rounded-3xl my-2 mx-1"
        >
          Search
        </button>
      </div>
      <MovieList search={search} />
      <div className="flex flex-col justify-center items-center h-screen mx-10 gap-6  ">
        <p className="text-4xl font-bold">🎬 Movie Explorer</p>
        <p className="font-semibold">
          Welcome to Movie Explorer – your ultimate destination for discovering
          and exploring movies from all around the world. Whether you're
          searching for your favorite film, checking out what's trending, or
          just in the mood to browse, Movie Explorer has got you covered.
        </p>
      
      </div>
    </div>
  );
}

export default Home;
