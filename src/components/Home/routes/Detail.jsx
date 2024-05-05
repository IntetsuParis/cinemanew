import React, { useEffect, useState } from "react";

import styles from "./Detail.module.scss";

import { useLocation } from "react-router-dom";

import { getImage, getRate, getYear } from "../LikeThis/LikeThis";

import ReactPlayer from "react-player";

const API_KEY = "cb46d76a0b00b19847f93f36a4873953";

function Detail() {
  const location = useLocation();
  const { id, title, poster_path, release_date, vote_average } =
    location.state || {};
  const [trailerUrl, setTrailerUrl] = useState();
  const getTrailer = async () => {
    try {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const videos = data.results;
          const trailer = videos.find((video) => video.type === "Trailer");
          const trailerUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
          setTrailerUrl(trailerUrl);
          console.log(data);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    getTrailer();
  }, []);
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
