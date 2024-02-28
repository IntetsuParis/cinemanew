import React from "react";

import styles from "./LikeThis.module.scss";

import Trending from "../Trending/Trending";

import Record from "../Trending/img/Record.svg";

export const getImage = (poster_path) => {
  return `https://image.tmdb.org/t/p/w500${poster_path}`;
};

export const getYear = (dateString) => {
  const date = new Date(dateString);
  return date.getFullYear();
};
export const getRate = (vote_average) => vote_average.toFixed(2);

const LikeThis = ({ title, poster_path, release_date, vote_average }) => {
  return (
    <>
      <div className={styles.movie__container}>
        <div className={styles.movies}>
          <img src={getImage(poster_path)} alt="Film" />
          <div className={styles.movie__info}>
            <h3>{title}</h3>
            <div className={styles.movie__subinfo}>
              <p>{getYear(release_date)}</p>
              <img src={Record} alt="Live" />
              <p>{vote_average !== undefined ? getRate(vote_average) : "-"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LikeThis;
