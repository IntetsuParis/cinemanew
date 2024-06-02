import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../Home/store/favorites/favorites.slice";

import { useActions } from "../../hooks/useActions";

const useFavoritesToggle = (film) => {
  const favorites = useSelector((state) => state.favorites);
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