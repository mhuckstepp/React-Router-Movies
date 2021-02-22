import React from "react";
import { Link } from "react-router-dom";

export default function SavedList(props) {
  const style = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <div className="saved-list">
      <Link to="/saved" style={style}>
        <h3>Saved Movies:</h3>
      </Link>
      {props.list.map((movie) => (
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/movies/${movie.id}`}
          key={movie.id}
        >
          <span className="saved-movie" key={movie.id}>
            {movie.title}
          </span>
        </Link>
      ))}
    </div>
  );
}
