import React from "react";
import { useData } from "../Сontext/DataProvider";
import styles from "./Explore.module.scss";

import getRate from "../../utils/getRate";

import getImage from "../../utils/getImage";

import getYear from "../../utils/getYear";

const Explorer = () => {
  const { movieList, setMovieList } = useData();

  return (
    <div className={styles.movie__container}>
      <div className={styles.movies}>
        {movieList.map((movie) => (
          <div key={movie.id} className={styles.movie}>
            <img src={getImage(movie.poster_path)} alt="Film" />
            <div className={styles.movie__info}>
              <h3>{movie.title}</h3>
              <div className={styles.movie__subinfo}>
                <p>{getYear(movie.release_date)}</p>

                <p className={styles.vote__average}>
                  {movie.vote_average !== undefined
                    ? getRate(movie.vote_average)
                    : "-"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explorer;
