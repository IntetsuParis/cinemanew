import React from "react";

import styles from "./LikeThis.module.scss";

import Record from "../Trending/img/Record.svg";

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import like from "./img/like.svg";
import notLike from "./img/notLike.svg";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/favorites/favorites.slice";
import useFavoritesToggle from "../../utils/favoritesUtils";

export const getImage = (poster_path) => {
  return `https://image.tmdb.org/t/p/w500${poster_path}`;
};

export const getYear = (dateString) => {
  const date = new Date(dateString);
  return date.getFullYear();
};
export const getRate = (vote_average) => vote_average.toFixed(2);

const LikeThis = ({
  id,
  title,
  poster_path,
  release_date,
  vote_average,
  original_title,
}) => {
  const film = { id, title, poster_path, release_date, vote_average };
  const [isExists, handleToggleFavorite] = useFavoritesToggle(film);
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

            {isExists ? (
              <img
                src={like}
                className={styles.favoriteIcon}
                alt="Like"
                onClick={() => handleToggleFavorite(id)}
              />
            ) : (
              <img
                src={notLike}
                className={styles.favoriteIcon}
                alt="Not Like"
                onClick={() => handleToggleFavorite(id)}
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
