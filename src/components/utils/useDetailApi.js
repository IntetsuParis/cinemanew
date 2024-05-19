import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

const API_KEY = "cb46d76a0b00b19847f93f36a4873953";

const useDetailApi = () => {
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
  return { trailerUrl };
};
export default useDetailApi;
