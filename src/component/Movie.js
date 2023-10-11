import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "white";
  } else if (vote >= 6) {
    return "orange";
  } else if (vote >= 4) {
    return "red";
  } else {
    return "yellow";
  }
};

const Movie = ({ title, poster_path, vote_average, overview }) => {
  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? IMG_API + poster_path
            : "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        }
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className="movie-over">
        <h3>{overview}</h3>
      </div>
    </div>
  );
};

export default Movie;
