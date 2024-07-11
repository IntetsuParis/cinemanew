import { useEffect, useState } from "react";
import { IFilm } from "../../@types/film.types";
import { API_KEY } from "../../.env.js";

const useExploreListApi = () => {
  const [exploreList, setExploreList] = useState<IFilm[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 10;

  const getExploreMovies = async (page: number) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      console.log(`Movies for page ${page}: `, json.results);
      setExploreList(json.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getExploreMovies(currentPage);
  }, [currentPage]);

  return { exploreList, currentPage, setCurrentPage, totalPages };
};

export default useExploreListApi;
