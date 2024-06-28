import styles from "./Trending.module.scss";

import { Link } from "react-router-dom";
import LikeThis from "../LikeThis/LikeThis";

import { IFilm } from "../../@types/film.types";

const Trending: React.FC<IFilm> = ({
  id,
  title,
  poster_path,
  release_date,
  vote_average,
}) => {
  return (
    <>
      <Link
        to={`/movie-details`}
        state={{
          title,
          poster_path,
          release_date,
          vote_average,
          id,
        }}
      ></Link>
      <LikeThis
        id={id}
        title={title}
        poster_path={poster_path}
        release_date={release_date}
        vote_average={vote_average}
      />
    </>
  );
};

export default Trending;
