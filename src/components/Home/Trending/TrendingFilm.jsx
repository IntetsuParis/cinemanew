// TrendingFilm.js
import React, { useEffect } from "react";
import styles from "./Trending.module.scss";
import Trending from "./Trending";
import Fire from "./img/Fire.svg";
import LikeThis from "../LikeThis/LikeThis";
import useMoviesApi from "../../utils/useMoviesApi";

function TrendingFilm() {
  const { movieList, youMayLikeThis } = useMoviesApi();

  return (
    <>
      <div className={styles.header}>
        <div className={styles.leftSection}>
          <img src={Fire} alt="Trending" />
          <h2>Trending</h2>
        </div>
        <div className={styles.rightSection}>
          <h2>See more</h2>
        </div>
      </div>
      <div className={styles.film}>
        {movieList.map((movie, index) => {
          return <Trending key={index} {...movie} />;
        })}
      </div>
      <div className={styles.header}>
        <div className={styles.leftSectionLikeThis}>
          <h2>You may like this</h2>
        </div>
        <div className={styles.rightSectionLikeThis}>
          <h2>See more</h2>
        </div>
      </div>

      <div className={styles.likefilm}>
        {youMayLikeThis.map((film, index) => {
          return <LikeThis key={index} {...film} />;
        })}
      </div>
    </>
  );
}

export default TrendingFilm;
