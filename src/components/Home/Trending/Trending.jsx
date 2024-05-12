import React, { useEffect, useState } from "react";

import styles from "./Trending.module.scss";

import Film from "./img/film.png";

import Record from "./img/Record.svg";
import { Link, useLocation } from "react-router-dom";
import LikeThis from "../LikeThis/LikeThis";

const getImage = (poster_path) => {
  return `https://image.tmdb.org/t/p/w500${poster_path}`;
};

const Trending = ({ id, title, poster_path, release_date, vote_average }) => {
  const getYear = (dateString) => new Date(dateString).getFullYear();
  const getRate = (vote_average) => vote_average.toFixed(2);
  const location = useLocation();

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
