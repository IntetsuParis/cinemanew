import React, { createContext, useState, useEffect, useContext } from "react";

// Создание контекста
const DataContext = createContext();

// Создание хука для использования данных из контекста
export const useData = () => useContext(DataContext);

// Компонент провайдера контекста, который будет хранить данные из API
export const DataProvider = ({ children }) => {
  const [movieList, setMovieList] = useState([]);
  const [YouMayLikeThis, setYouMayLikeThis] = useState([]);

  // Функция для получения данных из API
  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=cb46d76a0b00b19847f93f36a4873953&language=en-US"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();

      setMovieList(json.results.slice(0, 12));
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

      setYouMayLikeThis(json.results.slice(0, 12));
      console.log(json.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // Загрузка данных из API при монтировании компонента
  useEffect(() => {
    getMovies();
    getLikeThis();
  }, []);

  // Возвращаем провайдер контекста с данными из API
  return (
    <DataContext.Provider value={{ movieList, YouMayLikeThis }}>
      {children}
    </DataContext.Provider>
  );
};
