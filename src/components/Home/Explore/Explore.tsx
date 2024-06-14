import React, { FC, useState } from "react";

import styles from "./Explore.module.scss";

import getRate from "../../utils/getRate";

import getImage from "../../utils/getImage";

import getYear from "../../utils/getYear";

import useMoviesApi from "../../utils/useMoviesApi";

import Filter from "../Filter/Filter";
import useSortedMovies from "../Filter/useSortedMovies";
import { IFilm } from "../../../@types/film.types";
import { Link } from "react-router-dom";

const Explorer: FC = () => {
  const { movieList, youMayLikeThis } = useMoviesApi();
  const {
    sortByTitle,
    sortByDate,
    sortByRate,
    sortedMovies,
    handleTitleSortChange,
    handleDateSortChange,
    handleRateSortChange,
  } = useSortedMovies(movieList);

  return (
    <div className={styles.movie__container}>
      <Filter
        sortByTitle={sortByTitle}
        sortByDate={sortByDate}
        sortByRate={sortByRate}
        handleTitleSortChange={handleTitleSortChange}
        handleDateSortChange={handleDateSortChange}
        handleRateSortChange={handleRateSortChange}
      ></Filter>

      <div className={styles.movies}>
        {sortedMovies.map((movie) => (
          <div key={movie.id} className={styles.movie}>
            <Link
              to={`/movie-details`}
              state={{
                title: movie.title,
                poster_path: movie.poster_path,
                release_date: movie.release_date,
                vote_average: movie.vote_average,
                id: movie.id,
              }}
            >
              <img src={getImage(movie.poster_path)} alt="Film" />
            </Link>
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
