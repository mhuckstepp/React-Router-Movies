import React from "react";

export default function Stars(props) {
  const { stars } = props.movie;

  const style = {
    marginTop: "5%",
    color: "red",
  };

  if (!stars) {
    console.log(stars);
    return <div style={style}>No Stars Provided</div>;
  }

  return (
    <div>
      <h3>Actors</h3>
      {stars.map((star) => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}
