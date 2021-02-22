import React from "react";

const MovieCard = (props) => {
  const { title, director, metascore } = props.movie;

  return (
    <div style={{ textDecoration: "none" }}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
};

export default MovieCard;
