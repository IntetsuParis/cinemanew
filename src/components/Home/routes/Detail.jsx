import React, { useEffect, useState } from "react";

import styles from "./Detail.module.scss";

import { useLocation } from "react-router-dom";

import getYear from "../../utils/getYear";

import getImage from "../../utils/getImage";

import getRate from "../../utils/getRate";

import ReactPlayer from "react-player";
import useDetailApi from "../../utils/useDetailApi";

function Detail() {
  const { trailerUrl } = useDetailApi();
  const { state } = useLocation();
  const { title, poster_path, release_date, vote_average } = state || {};

  return (
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
        {trailerUrl && (
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
  );
}

export default Detail;
