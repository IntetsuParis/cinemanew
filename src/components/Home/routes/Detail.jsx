import React from "react";
import { useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation(); //
  const { title, poster_path, release_date, vote_average } = location.state;

  console.log(location.state); // Печатаем переданные пропсы в консоль

  return (
    <div>
      <h2>{title}</h2>
      <p>Release Date: {release_date}</p>
      <p>Vote Average: {vote_average}</p>
      <img src={poster_path} alt={title} />
    </div>
  );
}

export default Detail;
