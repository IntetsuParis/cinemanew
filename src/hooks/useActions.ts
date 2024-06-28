import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setRating } from "../store/favorites/ratingSlice";
import { setAvatar } from "../store/favorites/avatarSlice";
import {
  toggleToFavorites,
  removeFavorite,
} from "../store/favorites/favorites.slice";

const rootActions = {
  setRating,
  setAvatar,
  removeFavorite,
  toggleToFavorites,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
