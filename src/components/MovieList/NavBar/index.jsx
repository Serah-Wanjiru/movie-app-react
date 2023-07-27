// // // // // import React from "react";
// // // // // import './style.css'
// // // // // const Navbar = () => {
// // // // //    return (
// // // // //        <div className="Navbar">
// // // // //            <nav className="nav">
// // // // //                 <div>
// // // // //                     <h1 className="logo">M<span>oo</span>vie</h1>
// // // // //                 </div>
// // // // //                 <div className="search">
// // // // //                     <input type="text" placeholder="Search" />
// // // // //                 </div>
// // // // //                 <div className="links">
// // // // //                     <li>Home</li>
// // // // //                     <li>About</li>
// // // // //                     <li>My list</li>
// // // // //                     <button>Sign in</button>
// // // // //                 </div>
// // // // //             </nav>
// // // // //        </div>
// // // // //   );
// // // // // }
// // // // // export default Navbar;

// // // // import React, { useState } from "react";
// // // // import './style.css'

// // // // const Navbar = ({ onSearch }) => {
// // // //   const [searchValue, setSearchValue] = useState("");

// // // //   const handleInput = (event) => {
// // // //     setSearchValue(event.target.value);
// // // //   };

// // // //   const handleSearchClick = () => {
// // // //     onSearch(searchValue);
// // // //   };

// // // //   return (
// // // //     <div className="Navbar">
// // // //       <nav className="nav">
// // // //         <div>
// // // //           <h1 className="logo">M<span>oo</span>vie</h1>
// // // //         </div>
// // // //         <div className="search">
// // // //           <input
// // // //             type="text"
// // // //             value={searchValue}
// // // //             onChange={handleInput}
// // // //             placeholder="Search"
// // // //           />
// // // //           <button onClick={handleSearchClick}>Search</button>
// // // //         </div>
// // // //         <div className="links">
// // // //           <li>Home</li>
// // // //           <li>About</li>
// // // //           <li>My list</li>
// // // //           <button>Sign in</button>
// // // //         </div>
// // // //       </nav>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Navbar;

// // // import React, { useState } from "react";
// // // import './style.css';
// // // import { searchMovies } from "../../../utils/utilities";

// // // const Navbar = () => {
// // //   const [searchValue, setSearchValue] = useState("");

// // //   const handleInput = (event) => {
// // //     setSearchValue(event.target.value);
// // //     console.log("I am typing", event.target.value);
// // //   };

// // //   const handleSearchClick = async () => {
// // //     console.log("I am searching", searchValue);
// // //     const searchResults = await searchMovies(searchValue);
// // //     console.log("Search Results:", searchResults);
// // //     // You can now update the state or perform any action with the search results.
// // //   };

// // //   return (
// // //     <div className="Navbar">
// // //       <nav className="nav">
// // //         <div>
// // //           <h1 className="logo">M<span>oo</span>vie</h1>
// // //         </div>
// // //         <div className="search">
// // //           <input
// // //             value={searchValue}
// // //             onChange={handleInput}
// // //             type="text"
// // //             placeholder="Search"
// // //           />
// // //           <button onClick={handleSearchClick} className="bar">search</button>
// // //         </div>
// // //         <div className="links">
// // //           <li>Home</li>
// // //           <li>About</li>
// // //           <li>My list</li>
// // //           <button>Sign in</button>
// // //         </div>
// // //       </nav>
// // //     </div>
// // //   );
// // // };

// // // export default Navbar;

// // // Navbar.jsx
// // import React, { useState } from "react";
// // import './style.css';
// // import { searchMovies } from "../../../utils/utilities";

// // const Navbar = () => {
// //   const [searchValue, setSearchValue] = useState("");
// //   const [searchResults, setSearchResults] = useState([]);

// //   const handleInput = (event) => {
// //     setSearchValue(event.target.value);
// //     console.log("I am typing", event.target.value);
// //   };

// //   const handleSearchClick = async () => {
// //     console.log("I am searching", searchValue);
// //     const results = await searchMovies(searchValue);
// //     console.log("Search Results:", results);
// //     setSearchResults(results.results); // Update state with search results
// //   };

// //   return (
// //     <div className="Navbar">
// //       <nav className="nav">
// //         <div>
// //           <h1 className="logo">M<span>oo</span>vie</h1>
// //         </div>
// //         <div className="search">
// //           <input
// //             value={searchValue}
// //             onChange={handleInput}
// //             type="text"
// //             placeholder="Search"
// //           />
// //           <button onClick={handleSearchClick} className="bar">
// //             Search
// //           </button>
// //         </div>
// //         <div className="links">
// //           <li>Home</li>
// //           <li>About</li>
// //           <li>My list</li>
// //           <button>Sign in</button>
// //         </div>
// //       </nav>
// //       {/* Display search results */}
// //       <div className="search-results">
// //         {searchResults.map((movie) => (
// //           <div key={movie.id} className="search-result">
// //             <img
// //               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
// //               alt={movie.title}
// //             />
// //             <h3>{movie.title}</h3>
// //             <p>{movie.overview}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;


// import React, { useState } from "react";
// import './style.css'

// const Navbar = ({ onSearch }) => {
//   const [searchValue, setSearchValue] = useState("");

//   const handleInput = (event) => {
//     setSearchValue(event.target.value);
//   };

//   const handleSearchClick = () => {
//     onSearch(searchValue);
//   };

//   return (
//     <div className="Navbar">
//       <nav className="nav">
//         <div>
//           <h1 className="logo">M<span>oo</span>vie</h1>
//         </div>
//         <div className="search">
//           <input
//             type="text"
//             value={searchValue}
//             onChange={handleInput}
//             placeholder="Search"
//           />
//           <button onClick={handleSearchClick}>Search</button>
//         </div>
//         <div className="links">
//           <li>Home</li>
//           <li>About</li>
//           <li>My list</li>
//           <button>Sign in</button>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import './style.css';

const Navbar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchValue);
  };

  return (
    <div className="Navbar">
      <nav className="nav">
        <div>
          <h1 className="logo">M<span>oo</span>vie</h1>
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
    </div>
  );
}

export default Navbar;


