import React, { useState, useEffect } from "react";
import axios from "axios";

import SavedList from "./Movies/SavedList";
import { Route, NavLink } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import SavedListPage from "./Movies/SavedListPage";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies") // Study this endpoint with Postman
        .then((response) => {
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (id) => {
    movieList.map((movie) => {
      // if (id === movie.id && !saved.map((elem) => elem.id).includes(id)) {
      if (id === movie.id && !saved.find((elem) => elem.id === movie.id)) {
        return setSaved([...saved, movie]);
      } else {
        return null;
      }
    });
  };

  const style = {
    textDecoration: "none",
    color: "black",
  };

  const activeStyle = {
    fontWeight: "bold",
    color: "blue",
  };

  return (
    <div>
      <nav>
        <NavLink exact to="/" style={style} activeStyle={activeStyle}>
          <div>Home</div>
        </NavLink>
        <NavLink to="/saved" activeStyle={activeStyle} style={style}>
          <div>Saved</div>
        </NavLink>
      </nav>
      <SavedList list={saved} />
      <Route exact path="/">
        <MovieList movies={movieList} />
      </Route>
      <Route path="/movies/:id">
        <Movie addToSavedList={addToSavedList} />
      </Route>
      <Route path="/saved">
        <SavedListPage list={saved} />
      </Route>
    </div>
  );
}
