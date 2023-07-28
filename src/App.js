
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

