import { useState, useMemo } from "react";
import { IFilm } from "../../@types/film.types";

const useSortedMovies = (exploreList: IFilm[]) => {
  const [sortByTitle, setSortByTitle] = useState("default");
  const [sortByDate, setSortByDate] = useState("default");
  const [sortByRate, setSortByRate] = useState("default");

  const handleTitleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortByDate("default");
    setSortByRate("default");
    setSortByTitle(e.target.value);
  };

  const handleDateSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortByTitle("default");
    setSortByRate("default");
    setSortByDate(e.target.value);
  };

  const handleRateSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortByTitle("default");
    setSortByDate("default");
    setSortByRate(e.target.value);
  };

  const sortedMovies = useMemo(() => {
    return [...exploreList].sort((a, b) => {
      if (sortByTitle !== "default") {
        if (sortByTitle === "title-asc") return a.title.localeCompare(b.title);
        if (sortByTitle === "title-desc") return b.title.localeCompare(a.title);
      }
      if (sortByDate !== "default") {
        if (sortByDate === "date-asc")
          return (
            new Date(a.release_date).getTime() -
            new Date(b.release_date).getTime()
          );
        if (sortByDate === "date-desc")
          return (
            new Date(b.release_date).getTime() -
            new Date(a.release_date).getTime()
          );
      }
      if (sortByRate !== "default") {
        if (sortByRate === "rate-asc") return a.vote_average - b.vote_average;
        if (sortByRate === "rate-desc") return b.vote_average - a.vote_average;
      }
      return 0;
    });
  }, [exploreList, sortByTitle, sortByDate, sortByRate]);

  return {
    sortByTitle,
    sortByDate,
    sortByRate,
    sortedMovies,
    handleTitleSortChange,
    handleDateSortChange,
    handleRateSortChange,
  };
};

export default useSortedMovies;
