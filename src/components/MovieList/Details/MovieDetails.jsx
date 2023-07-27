// import React from "react";

// const MovieDetails = ({ movie }) => {
//   return (
//     <div className="movie-details">
//       <h2>{movie.title}</h2>
//       <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//       <p>{movie.overview}</p>
//       <p>Release Date: {movie.release_date}</p>
//       {/* Add other movie details that you want to display */}
//     </div>
//   );
// };

// export default MovieDetails;

import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import { getMovieDetails } from "../../../utils/utilities";

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const MovieDetails = () => {
  const { movieId } = useParams(); // Get the movieId from the URL parameter
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async () => {
      const movieData = await getMovieDetails(movieId);
      setMovie(movieData);
    })();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      {/* Add more movie details here as needed */}
    </div>
  );
};

export default MovieDetails;

