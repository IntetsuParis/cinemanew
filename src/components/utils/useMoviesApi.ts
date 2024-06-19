// useMoviesApi.js
import { useState, useEffect } from "react";

import { IFilm } from "../../@types/film.types";

const useMoviesApi = () => {
  const [movieList, setMovieList] = useState<IFilm[]>([]);
  const [youMayLikeThis, setYouMayLikeThis] = useState<IFilm[]>([]);
  const [exploreList, setExploreList] = useState<IFilm[]>([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=cb46d76a0b00b19847f93f36a4873953&language=en-US"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      console.log(json.results);
      setMovieList(json.results.slice(0, 12));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  const getExpoloreMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=cb46d76a0b00b19847f93f36a4873953&language=en-US"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      console.log(`Здесь эксплор `, json.results);
      setExploreList(json.results.slice(0, 50));
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

      setYouMayLikeThis(json.results.slice(0, 12));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getMovies();
    getLikeThis();
    getExpoloreMovies();
  }, []);

  return { movieList, youMayLikeThis, exploreList };
};

export default useMoviesApi;
