import React from "react";
import { Actor } from "../../@types/actors.types";
import useFavoriteActors from "../utils/favoriteActors";
import like from "./img/like.svg";
import notLike from "./img/notLike.svg";
import styles from "./Actors.module.scss";

interface FavoriteButtonProps {
  actor: Actor;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ actor }) => {
  const [isExistsActor, handleToggleToFavoriteActor] = useFavoriteActors(actor);

  const handleClick = () => {
    handleToggleToFavoriteActor(actor.id); // Передаем id актера для добавления/удаления из избранного
  };

  return (
    <img
      src={isExistsActor ? like : notLike}
      alt={isExistsActor ? "Like" : "Not Like"}
      className={styles.favoriteIcon}
      onClick={handleClick}
    />
  );
};

export default FavoriteButton;
