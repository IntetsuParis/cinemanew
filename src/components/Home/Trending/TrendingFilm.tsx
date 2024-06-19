// TrendingFilm.js
import React, { useEffect, useState } from "react";
import styles from "./Trending.module.scss";
import Trending from "./Trending";
import Fire from "./img/Fire.svg";
import LikeThis from "../LikeThis/LikeThis";
import useMoviesApi from "../../utils/useMoviesApi";
import SkeletonTrending from "./SkeletonTrending/SkeletonTrending";

function TrendingFilm() {
  const { movieList, youMayLikeThis } = useMoviesApi();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (movieList.length > 0 && youMayLikeThis.length > 0) {
      setLoading(false);
    }
  }, [movieList, youMayLikeThis]);

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
        {loading
          ? Array.from({ length: 12 }).map((_, index) => <SkeletonTrending />)
          : movieList.map((movie, index) => <Trending {...movie} />)}
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
        {youMayLikeThis.map((film, index) => (
          <div className={styles.movie} key={index}>
            <LikeThis {...film} />
          </div>
        ))}
      </div>
    </>
  );
}

export default TrendingFilm;
