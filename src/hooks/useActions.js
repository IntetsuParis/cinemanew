import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setRating } from "../components/Home/store/favorites/ratingSlice";
import { setAvatar } from "../components/Home/store/favorites/avatarSlice";
import {
  toggleToFavorites,
  removeFavorite,
} from "../components/Home/store/favorites/favorites.slice";

const rootActions = {
  setRating,
  setAvatar,
  removeFavorite,
  toggleToFavorites, // Include setRating from the rating slice
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
