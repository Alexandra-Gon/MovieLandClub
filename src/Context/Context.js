import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [moviesData, setMoviesData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [ category, setCategory ] = useState("now_playing")



  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=3b95bc371ca8adf25f2b95be1f067696`
    ).then((respuesta) => setMoviesData(respuesta.data.results)).catch(e => console.log(e));
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    if (searchMovie) {
      axios(
        `https://api.themoviedb.org/3/search/movie?api_key=3b95bc371ca8adf25f2b95be1f067696&query=${searchMovie}`
      ).then((respuesta) => setMoviesData(respuesta.data.results)).catch(e => console.log(e));
    }
  };

  const changeCategory = (category) => {
    setCategory(category);
      axios(
        `https://api.themoviedb.org/3/movie/${category}?api_key=3b95bc371ca8adf25f2b95be1f067696`
      ).then((respuesta) => setMoviesData(respuesta.data.results)).catch(e => console.log(e));

  };

  return (
    <MoviesContext.Provider
      value={{
        moviesData,
        setMoviesData,
        handleChange,
        searchMovie,
        setSearchMovie,
        changeCategory,
        category,
        setCategory
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
