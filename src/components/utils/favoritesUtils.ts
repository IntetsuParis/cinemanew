import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useActions } from "../../hooks/useActions";
import { IFilm } from "../../@types/film.types";
import { RootState } from "../../store/store";

const useFavoritesToggle = (film: IFilm): [boolean, (id: number) => void] => {
  const favorites = useSelector((state: RootState) => state.favorites);
  const { removeFavorite, toggleToFavorites } = useActions();
  const [isExists, setIsExists] = useState(false);

  useEffect(() => {
    setIsExists(favorites.some((f) => f.id === film.id));
  }, [favorites, film.id]);

  const handleToggleFavorite = () => {
    if (isExists) {
      removeFavorite(film);
    } else {
      toggleToFavorites(film);
    }
  };

  return [isExists, handleToggleFavorite];
};

export default useFavoritesToggle;
