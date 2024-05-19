import React, { useEffect } from "react";

import styles from "./LikeThis.module.scss";

import Record from "../Trending/img/Record.svg";

import { Link } from "react-router-dom";

import like from "./img/like.svg";

import notLike from "./img/notLike.svg";

import useFavoritesToggle from "../../utils/favoritesUtils";

import getRate from "../../utils/getRate";

import getImage from "../../utils/getImage";

import getYear from "../../utils/getYear";

const LikeThis = ({ id, title, poster_path, release_date, vote_average }) => {
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
