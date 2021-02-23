import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function SavedList(props) {
  const style = {
    textDecoration: "none",
    color: "black",
  };

  const activeStyle = {
    color: "red",
  };

  return (
    <div className="saved-list">
      <Link to="/saved" style={style}>
        <h3>Saved Movies:</h3>
      </Link>
      {props.list.map((movie) => (
        <NavLink
          style={{ textDecoration: "none", color: "black" }}
          activeStyle={activeStyle}
          to={`/movies/${movie.id}`}
          key={movie.id}
        >
          <span className="saved-movie" key={movie.id}>
            {movie.title}
          </span>
        </NavLink>
      ))}
    </div>
  );
}
