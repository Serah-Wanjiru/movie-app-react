// // // import React, {useEffect,useState} from "react";
// // // import { getMovies } from "../../utils/utilities";
// // // import ImageContainer from "../../atoms/Image-container";
// // // import './style.css';


// // // // this  so we start with the backticks items.poster_ath

// // // const MovieList= () =>{
// // // const [movies, setMovies] = useState([]);
// // // const [loading,setLoading] = useState(false);

// // // useEffect(()=>{
// // //     (async()=>{
// // //         setLoading(true);
// // //         const movies = await getMovies();
// // //         setMovies(movies.results);
// // //         setLoading(false);
// // //         console.log({movies});
// // //     })();
// // // },[]);

// // // if(loading){
// // //     return <h1>Loading movies...</h1>
// // // }
// // //     return(
       
// // //         <div className="movies">
            
            
// // //             {/* //setting the conditions ot check if theres an array of movies and its greater than zero and loding is false */}
// // //             {movies&&
// // //             loading===false &&
// // //             movies.length>0 && movies.map(
// // //                 (item) =>(
// // //                     <ImageContainer props={item}/> 
// // //                 )
// // //             )}
// // //             {/* {movies&& loading && movies.length===0 && movies.map(} */}
// // //         </div>
// // //         )
// // // }
// // // export default MovieList;

// // // // we call props which is an argument and call item in the constructor so that we can access 

// // import React, { useEffect, useState } from "react";
// // import { getMovies } from "../../utils/utilities";
// // import ImageContainer from "../../atoms/Image-container";
// // import CategoryFilter from "./MovieCategory/MovieCategoryFilter";
// // import './style.css';

// // const MovieList= () =>{
// //     const [movies, setMovies] = useState([]);
// //     const [loading, setLoading] = useState(false);
// //     const [selectedCategory, setSelectedCategory] = useState("all"); // Add selectedCategory state

// //     useEffect(()=>{
// //         (async()=>{
// //             setLoading(true);
// //             const movies = await getMovies();
// //             setMovies(movies.results);
// //             setLoading(false);
// //             console.log({movies});
// //         })();
// //     },[]);

// //     if(loading){
// //         return <h1>Loading movies...</h1>
// //     }

// //     // Function to filter movies based on the selected category
// //     const filterMoviesByCategory = (movies, selectedCategory) => {
// //         if (selectedCategory === "all") {
// //             return movies;
// //         } else {
// //             return movies.filter((movie) =>
// //                 movie.genre_ids.includes(parseInt(selectedCategory))
// //             );
// //         }
// //     };

// //     // Filter the movies based on the selected category
// //     const filteredMovies = filterMoviesByCategory(movies, selectedCategory);

// //     // Define a function to handle category changes
// //     const handleCategoryChange = (category) => {
// //         setSelectedCategory(category);
// //     };

    
// //     return (
// //         <div className="movies-container">
// //             {/* Render the CategoryFilter component and pass the handleCategoryChange function as a prop */}
// //             <CategoryFilter handleCategoryChange={handleCategoryChange} />

// //             {/* Separate container for displaying the movie images */}
// //             <div className="movies">
// //                 {filteredMovies.map((item) => (
// //                     <ImageContainer props={item} key={item.id} />
// //                 ))}
// //             </div>
// //         </div>
// //     )
// // }

// // export default MovieList;

// import React, { useEffect, useState } from "react";
// import { getMovies } from "../../utils/utilities";
// import ImageContainer from "../../atoms/Image-container";
// import "./style.css";
// import CategoryFilter from "./MovieCategory/MovieCategoryFilter";

// const MovieList = () => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [selectedCategoryName, setSelectedCategoryName] = useState("All");

//   useEffect(() => {
//     (async () => {
//       setLoading(true);
//       const movies = await getMovies();
//       setMovies(movies.results);
//       setLoading(false);
//     })();
//   }, []);

//   const handleCategoryChange = (categoryId, categoryName) => {
//     setSelectedCategory(categoryId);
//     setSelectedCategoryName(categoryName);
//   };

//   const filteredMovies =
//     selectedCategory === "all"
//       ? movies
//       : movies.filter((movie) => movie.genre_ids.includes(parseInt(selectedCategory)));

//   return (
//     <div>
//       {selectedCategoryName !== "All" && <h1>{selectedCategoryName} Movies</h1>}

//       <CategoryFilter
//         selectedCategory={selectedCategory}
//         handleCategoryChange={handleCategoryChange}
//       />

//       <div className="movies">
//         {filteredMovies.map((item) => (
//           <ImageContainer props={item} key={item.id} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieList;


import React, { useEffect, useState } from "react";
import { getMovies } from "../../utils/utilities";
import ImageContainer from "../../atoms/Image-container";
import "./style.css";
import CategoryFilter from "./MovieCategory/MovieCategoryFilter";


const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCategoryName, setSelectedCategoryName] = useState("All");

  useEffect(() => {
    (async () => {
      const movies = await getMovies();
      setMovies(movies.results);
    })();
  }, []);

  const handleCategoryChange = (categoryId, categoryName) => {
    setSelectedCategory(categoryId);
    setSelectedCategoryName(categoryName);
  };

  const filteredMovies =
    selectedCategory === "all"
      ? movies
      : movies.filter((movie) => movie.genre_ids.includes(parseInt(selectedCategory)));

  return (
    <div>
      {selectedCategoryName !== "All" && <h1>{selectedCategoryName} Movies</h1>}

      <CategoryFilter
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />

      <div className="movies">
        {filteredMovies.map((item) => (
          <ImageContainer props={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

