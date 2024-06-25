import React, { useState } from "react";

import { IFilm } from "../../@types/film.types";
import { API_KEY } from "../../.env";

const useSearchMoviesApi = () => {
  const [searchResults, setSearchResults] = useState<IFilm[]>([]);

  const searchMovies = async (query: string) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
          query
        )}`
      );
      if (!response.ok) {
        throw new Error("Newtwork wrong");
      }
      const json = await response.json();
      console.log("Query", json.results);
      setSearchResults(json.results);
    } catch (error) {
      console.error("Error query", error);
    }
  };
  return { searchResults, searchMovies };
};

export default useSearchMoviesApi;
