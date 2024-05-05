import React from "react";

import styles from "./LikeThis.module.scss";

import Trending from "../Trending/Trending";

import Record from "../Trending/img/Record.svg";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import favorites from "./img/favorites.svg";
import notFavorite from "./img/notFavorite.svg";
import { useDispatch, useSelector } from "react-redux";

export const getImage = (poster_path) => {
  return `https://image.tmdb.org/t/p/w500${poster_path}`;
};

export const getYear = (dateString) => {
  const date = new Date(dateString);
  return date.getFullYear();
};
export const getRate = (vote_average) => vote_average.toFixed(2);

const LikeThis = ({ id, title, poster_path, release_date, vote_average }) => {
  // const { favorites } = useSelector((state) => state);

  // console.log(favorites);

  // const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (event) => {
    event.stopPropagation();
    if (event.target.classList.contains(styles.favoriteIcon)) {
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <>
      <div className={styles.movie__container}>
        <div className={styles.movies}>
          <div className={styles.imageContainer}>
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
            >
              <img src={getImage(poster_path)} alt="Film" />
            </Link>

            {/* <p
              className={styles.favoriteIcon}
              alt="Favorites"
              onClick={toggleFavorite}
            >
              {" "}
              <img src={favorites} />
            </p> */}

            {isFavorite ? (
              <img
                src={favorites}
                className={styles.favoriteIcon}
                alt="Favorites"
                onClick={toggleFavorite}
              />
            ) : (
              <img
                src={notFavorite}
                className={styles.favoriteIcon}
                alt="notFavorite"
                onClick={toggleFavorite}
              />
            )}
          </div>

          <div className={styles.movie__info}>
            <h3>{title}</h3>
            <div className={styles.movie__subinfo}>
              <p>{getYear(release_date)}</p>
              <img src={Record} alt="Live" />
              <p className={styles.vote__average}>
                {vote_average !== undefined ? getRate(vote_average) : "-"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LikeThis;
