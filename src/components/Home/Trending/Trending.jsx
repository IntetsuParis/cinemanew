import React, { useEffect, useState } from "react";

import styles from "./Trending.module.scss";

import Film from "./img/film.png";

import { Link } from "react-router-dom";
import LikeThis from "../LikeThis/LikeThis";

const Trending = ({ id, title, poster_path, release_date, vote_average }) => {
  return (
    <>
      <Link
        className
        to={`/movie-details`}
        state={{
          title,
          poster_path,
          release_date,
          vote_average,
          id,
        }}
      ></Link>
      <LikeThis
        id={id}
        title={title}
        poster_path={poster_path}
        release_date={release_date}
        vote_average={vote_average}
      />
    </>
  );
};

export default Trending;
