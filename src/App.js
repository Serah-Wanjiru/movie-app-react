
import React from 'react';
import './App.css';
import Navbar from './components/MovieList/NavBar';
import MovieList from './components/MovieList';
import MovieLists from './components/MovieList/slider/slider';

function App() {
  return (
    <div className='main'>
       <Navbar />
       <MovieLists />
       <MovieList />
    </div>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import "./App.css";
// import Navbar from './components/MovieList/NavBar';
// import MovieList from './components/MovieList';
// import MovieLists from './components/MovieList/slider/slider';
// import MovieDetails from './components/MovieDetails'; // Import MovieDetails component

// function App() {
//   return (
//     <Router>
//       <div className='main'>
//         <Navbar />
//         <Switch>
//           <Route exact path="/" component={MovieLists} />
//           <Route exact path="/movies" component={MovieList} />
//           {/* Add the route for movie details page */}
//           <Route exact path="/movie/:movieId" component={MovieDetails} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/MovieList/NavBar';
// import MovieList from './components/MovieList';
// import MovieLists from './components/MovieList/slider/slider';
// import MovieDetails from './components/MovieList/Details/MovieDetails';

// function App() {
//   return (
//     <Router>
//       <div className='main'>
//         <Navbar />
//         <Routes>
//           <Route path="/movie" element={<MovieLists />} />
//           <Route path="/movies" element={<MovieList />} />
//           <Route path="/movies/:id" element={<MovieDetails />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


