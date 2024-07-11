import axios from "axios";
import { API_KEY } from "../../.env.js";

import React, { useEffect, useState } from "react";
import { Actor } from "../../@types/actors.types";

const useActors = () => {
  const [actors, setActors] = useState<Actor[]>([]);
  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}`
        );
        const actors = response.data.results;

        console.log("ACTORS", response.data.results);

        setActors(actors);
      } catch (error) {
        console.error("Error fetching actors", error);
      }
    };

    fetchActors();
  }, []);

  return { actors };
};

export default useActors;
