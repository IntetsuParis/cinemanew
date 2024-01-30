import React, { useEffect, useState } from "react";

import styles from "./Trending.module.scss";

import Trending from "./Trending";

import Fire from "./img/Fire.svg";

import LikeThis from "../LikeThis/LikeThis";

function TrendingFilm() {
  const [movieList, setMovieList] = useState([]);
  const [YouMayLikeThis, setYouMayLikeThis] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=cb46d76a0b00b19847f93f36a4873953&language=en-US"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();

      setMovieList(json.results.slice(0, 10));
      console.log(json.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  const getLikeThis = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=cb46d76a0b00b19847f93f36a4873953&language=en-US"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();

      setYouMayLikeThis(json.results.slice(0, 10));
      console.log(json.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  useEffect(() => {
    getMovies();
    getLikeThis();
  }, []);

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
        {YouMayLikeThis.map((film, index) => {
          return <LikeThis key={index} {...film} />;
        })}
      </div>
    </>
  );
}

export default TrendingFilm;
