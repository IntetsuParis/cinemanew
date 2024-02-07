import React, { useEffect, useState } from "react";

import styles from "./Trending.module.scss";

import Film from "./img/film.png";

import Record from "./img/Record.svg";
import { Link, useLocation } from "react-router-dom";

const getImage = (poster_path) => {
  return `https://image.tmdb.org/t/p/w500${poster_path}`;
};

const Trending = ({ title, poster_path, release_date, vote_average }) => {
  const getYear = (dateString) => new Date(dateString).getFullYear();
  const getRate = (vote_average) => vote_average.toFixed(2);
  const location = useLocation(); // Получаем объект location из хука useLocation()

  return (
    <Link
      to={`/movie-details`} // Убираем объект to, state становится top-level prop
      state={{
        title,
        poster_path,
        release_date,
        vote_average,
      }}
    >
      <div className={styles.movie__container}>
        <div className={styles.movies}>
          <img src={getImage(poster_path)} alt="Film" />
          <div className={styles.movie__info}>
            <h3>{title}</h3>
            <div className={styles.movie__subinfo}>
              <p>{getYear(release_date)}</p>
              <img src={Record} alt="Live" />
              <p>{getRate(vote_average)}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Trending;
