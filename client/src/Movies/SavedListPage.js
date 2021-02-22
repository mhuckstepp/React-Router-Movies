import React from "react";
import { Link } from "react-router-dom";

export default function SavedListPage(props) {
  const style = {
    textDecoration: "none",
    color: "black",
    margin: "2%",
  };

  const pageStyle = {
    display: "flex",
    flexDirection: "column",
  };

  if (props.list.length < 1) {
    return <h1>Save a Movie!</h1>;
  }

  return (
    <div style={pageStyle}>
      <h3>Saved Movies:</h3>
      {props.list.map((movie) => (
        <Link style={style} to={`/movies/${movie.id}`} key={movie.id}>
          <span className="saved-movie" key={movie.id}>
            {movie.title}
          </span>
        </Link>
      ))}
    </div>
  );
}
