import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import Stars from "./Stars";

export default function Movie(props) {
  const [movie, setMovie] = useState();
  const { addToSavedList } = props;

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const saveMovie = (evt) => {
    addToSavedList(movie.id);
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <div className="movie-card" style={{ textDecoration: "none" }}>
        <MovieCard movie={movie} />
        <Stars movie={movie} />
        <div className="save-button" onClick={saveMovie}>
          Save
        </div>
      </div>
    </div>
  );
}
