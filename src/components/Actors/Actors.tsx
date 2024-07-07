import React from "react";
import useActors from "../utils/useActors";
import styles from "./Actors.module.scss";
import getImageActor from "../utils/getImageActor";
import { Actor } from "../../@types/actors.types";

const Actors: React.FC = () => {
  const { actors } = useActors();

  return (
    <div className={styles.container}>
      <div className={styles.actors}>
        {actors.map((actor: Actor) => (
          <div className={styles.actor}>
            <img src={getImageActor(actor.profile_path)} alt="Photo of actor" />
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
