import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { IVideo } from "../../@types/video.types";
import { ILocationState } from "../../@types/film.types";
import { API_KEY } from "../../.env";

const useDetailApi = () => {
  const location = useLocation();
  const state = location.state as ILocationState;
  const { id } = location.state || {};
  const [trailerUrl, setTrailerUrl] = useState<string | undefined>(undefined);
  const getTrailer = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const videos: IVideo[] = data.results;
      const trailer = videos.find((video) => video.type === "Trailer");

      if (trailer) {
        const trailerUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
        setTrailerUrl(trailerUrl);
      } else {
        console.log("Trailer not found");
      }

      console.log(data);
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
