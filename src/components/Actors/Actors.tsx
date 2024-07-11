import React from "react";
import useActors from "../utils/useActors";
import styles from "./Actors.module.scss";
import getImageActor from "../utils/getImageActor";
import { Actor } from "../../@types/actors.types";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

const Actors: React.FC = () => {
  const { actors } = useActors();

  return (
    <div className={styles.container}>
      <div className={styles.actors}>
        {actors.map((actor: Actor) => (
          <div className={styles.actor} key={actor.id}>
            <div className={styles.imageContainer}>
              <Link to={`/actor-details/${actor.id}`}>
                <img
                  src={getImageActor(actor.profile_path)}
                  alt="Фото актёра"
                />
              </Link>
              <FavoriteButton actor={actor} />
            </div>
            <div className={styles.subinfo}>
              <p>{actor.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actors;
