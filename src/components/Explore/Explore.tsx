import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Explore.module.scss";
import getRate from "../utils/getRate";
import getImage from "../utils/getImage";
import getYear from "../utils/getYear";
import useMoviesApi from "../utils/useMoviesApi";
import Filter from "../Filter/Filter";
import useSortedMovies from "../Filter/useSortedMovies";
import useSearchMoviesApi from "../utils/useSearchMoviesApi";
import Search from "./Search/Search";
import useExploreListApi from "../utils/useExploreList";

const Explorer: FC = () => {
  const { exploreList, currentPage, setCurrentPage, totalPages } =
    useExploreListApi();
  const { searchResults, searchMovies } = useSearchMoviesApi();
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);
  const {
    sortByTitle,
    sortByDate,
    sortByRate,
    sortedMovies,
    handleTitleSortChange,
    handleDateSortChange,
    handleRateSortChange,
  } = useSortedMovies(exploreList);

  const handleSearch = (query: string) => {
    if (query.trim() === "") {
      setSearchPerformed(false);
    } else {
      searchMovies(query);
      setSearchPerformed(true);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className={styles.movie__container}>
      <Filter
        sortByTitle={sortByTitle}
        sortByDate={sortByDate}
        sortByRate={sortByRate}
        handleTitleSortChange={handleTitleSortChange}
        handleDateSortChange={handleDateSortChange}
        handleRateSortChange={handleRateSortChange}
      />
      <div className={styles.search__container}>
        <Search onSearch={handleSearch} />
        {searchPerformed && searchResults.length === 0 && (
          <p>Извините, ничего не найдено</p>
        )}
        <div className={styles.movies}>
          {(searchPerformed ? searchResults : sortedMovies).map((movie) => (
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
        {!searchPerformed && (
          <div className={styles.pagination}>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageClick(index + 1)}
                className={currentPage === index + 1 ? styles.active : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explorer;
