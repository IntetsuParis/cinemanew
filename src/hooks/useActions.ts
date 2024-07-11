import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setRating } from "../store/favorites/ratingSlice";
import { setAvatar } from "../store/favorites/avatarSlice";
import {
  toggleToFavorites,
  removeFavorite,
} from "../store/favorites/favorites.slice";
import {
  removeFavoriteActors,
  toggleToFavoritesActors,
} from "../store/favorites/actorsSlice";
import { removeUser, setUser } from "../store/registration/userSlice";

const rootActions = {
  setRating,
  setAvatar,
  removeFavorite,
  toggleToFavorites,
  toggleToFavoritesActors,
  removeFavoriteActors,
  setUser,
  removeUser,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
