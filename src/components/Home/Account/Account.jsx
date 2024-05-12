import React from "react";
import styles from "./Account.module.scss";
import { useFavorites } from "../../../hooks/useFavorites";
import { useSelector } from "react-redux";
import avatar from "./img/avatar.jpg";
import { getImage } from "../LikeThis/LikeThis";

const Account = () => {
  const { favorites } = useFavorites();
  return (
    <div className={styles.account__container}>
      <div className={styles.avatar}>
        <img src={avatar} alt="Avatar" />
      </div>
      <div className={styles.movieList}>
        <h2>Favorite movies:</h2>
        <ul className={styles.movies}>
          {favorites.map((film) => (
            <li key={film.id} className={styles.movie}>
              <div className={styles.movie__info}>
                <h3>{film.title}</h3>
              </div>
              <img
                src={getImage(film.poster_path)}
                className={styles.huesos}
                alt="Poster"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Account;
