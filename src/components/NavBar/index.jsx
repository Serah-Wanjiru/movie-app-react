

import React, { useState } from "react";
import './style.css';
// import { searchMovies } from "../utils/utilities";
import { searchMovies } from "../../utils/utilities";

const Navigation = ()  => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setsearchResults]=useState([]);
  

  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = async() => {
   const results=await searchMovies(searchValue);
   setsearchResults(results.results);

  };

  return (
    <div className="Navigate">
      <nav className="navb">
        <div>
          <h1 className="word">Moovie</h1>
        </div>
        <div className="search">
          <input
            type="text"
            value={searchValue}
            onChange={handleInput}
            placeholder="Search"
          />
          <button onClick={handleSearchClick}>Search</button>
        </div>
        <div className="links">
          <li>Home</li>
          <li>About</li>
          <li>My list</li>
          <button>Sign in</button>
        </div>
      </nav>
      {searchResults.length > 0 && (
        <div className="search">
          {searchResults.map((movie) => (
            <div key={movie.id} className="search">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          ))}
        </div>
      )}
    
    </div>
  );
}
export default Navigation;


