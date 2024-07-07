import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Detail.module.scss";
import getYear from "../utils/getYear";
import getImage from "../utils/getImage";
import getRate from "../utils/getRate";
import ReactPlayer from "react-player";
import useDetailApi from "../utils/useDetailApi";
import Skeleton from "../Skeleton/Skeleton";
import { HelioCheckout } from "@heliofi/checkout-react"; //

import axios from "axios";
import { API_KEY } from "../../.env";

interface DetailProps {
  title?: string;
  poster_path?: string;
  release_date: string;
  vote_average?: number;
  id?: number;
}
interface Actor {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

function Detail() {
  const { state } = useLocation();
  const { title, poster_path, release_date, vote_average, id } =
    state as DetailProps;
  const { trailerUrl } = useDetailApi();
  const [loading, setLoading] = useState(true);
  const [showTrailer, setShowTrailer] = useState(false);
  const [actors, setActors] = useState<Actor[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowTrailer(true);
    }, 2000);

    // Fetch movie credits
    const fetchCredits = async (movieId: number) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
        );
        console.log("CHARACTERS", response.data.cast);
        setActors(response.data.cast.slice(0, 5));
      } catch (error) {
        console.error("Error fetching movie credits:", error);
      }
    };

    if (id) {
      fetchCredits(id);
    }

    return () => clearTimeout(timer);
  }, [id]);

  type NetworkType = "main" | "test"; // заглушка для тса
  type DisplayType = "button" | "inline"; // еще одна заглушка
  const helioConfig = {
    paylinkId: "66721781ed17a2d12654dfb9",
    network: "test" as NetworkType,
    display: "button" as DisplayType, //  тип DisplayType для параметра display
  };
  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <div className={styles.detail__container}>
          <div className={styles.detail__left}>
            <img src={getImage(poster_path)} alt={title} />
          </div>
          <div className={styles.detail__right}>
            <h2>{title}</h2>
            <p>Release Date: {getYear(release_date)}</p>
            <p>
              Vote Average:{" "}
              {vote_average !== undefined ? getRate(vote_average) : "-"}
            </p>
          </div>
          <div className={styles.player__wrapper}>
            {showTrailer && trailerUrl && (
              <ReactPlayer
                className={styles.react__player}
                url={trailerUrl}
                controls={true}
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 },
                  },
                }}
              />
            )}
            <div className={styles.payment}>
              <HelioCheckout config={helioConfig} />
            </div>
            <div className={styles.actors}>
              <h3>Actors</h3>
              <div className={styles.actorList}>
                {actors.map((actor) => (
                  <div key={actor.id} className={styles.actor}>
                    <img
                      src={getImage(actor.profile_path)}
                      alt={actor.name}
                      className={styles.actorImage}
                    />
                    <div className={styles.actorInfo}>
                      <p className={styles.actorName}>{actor.name}</p>
                      <p className={styles.actorCharacter}>
                        as {actor.character}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
