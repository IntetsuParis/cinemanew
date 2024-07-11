import React, { useEffect, useState } from "react";
import { Actor } from "../../@types/actors.types";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useActions } from "../../hooks/useActions";

const useFavoriteActors = (actor: Actor): [boolean, (id: number) => void] => {
  const favoriteActors = useSelector(
    (state: RootState) => state.favoriteActors
  );
  const { removeFavoriteActors, toggleToFavoritesActors } = useActions();
  const [isExistsActor, setIsExistsActor] = useState(false);

  useEffect(() => {
    setIsExistsActor(favoriteActors.some((a) => a.id === actor.id));
  }, [favoriteActors, actor.id]);

  const handleToggleToFavoriteActor = () => {
    if (isExistsActor) {
      removeFavoriteActors(actor);
    } else {
      toggleToFavoritesActors(actor);
    }
  };
  return [isExistsActor, handleToggleToFavoriteActor];
};

export default useFavoriteActors;
