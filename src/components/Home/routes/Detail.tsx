import React, { useEffect, useState } from "react";

import styles from "./Detail.module.scss";

import { useLocation } from "react-router-dom";

import getYear from "../../utils/getYear";

import getImage from "../../utils/getImage";

import getRate from "../../utils/getRate";

import ReactPlayer from "react-player";
import useDetailApi from "../../utils/useDetailApi";

import Skeleton from "../../Skeleton/Skeleton";

interface DetailProps {
  title?: string;
  poster_path?: string;
  release_date: string;
  vote_average?: number;
  id?: number;
}

function Detail() {
  const [loading, setLoading] = useState(true);

  const { trailerUrl } = useDetailApi();
  const [showTrailer, setShowTrailer] = useState(false);
  const { state } = useLocation();
  const { title, poster_path, release_date, vote_average } =
    (state as DetailProps) || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowTrailer(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
          </div>
        </div>
      )}
    </>
  );
}
export default Detail;
