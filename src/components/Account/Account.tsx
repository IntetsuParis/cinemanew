import React, { useState, useRef, useEffect } from "react";
import styles from "./Account.module.scss";

import avatarDefault from "./img/avatar.svg";

import { useSelector } from "react-redux";

import { RootState } from "../../store/store";

import AccountHelper from "./AccountHelper/AccountHelper";
import { useActions } from "../../hooks/useActions";
import ModalHandler from "../Modals/modalHandler";
import getYear from "../utils/getYear";
import getRate from "../utils/getRate";
import ModalRating from "../Modals/ModalRating";
import { useNavigate } from "react-router-dom";
import Authorization from "../Authorization/Authorization";

const Account = () => {
  const { setAvatar } = useActions();
  const { isAuth } = useSelector((state: RootState) => state.user);
  const storedImage = useSelector((state: RootState) => state.avatar.image);
  const navigate = useNavigate();
  const userRatings = useSelector(
    (state: RootState) => state.rating.userRating
  );
  const favorites = useSelector((state: RootState) => state.favorites);

  const [image, setImage] = useState<string>(storedImage || "");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    if (inputRef.current) {
      inputRef.current.click();
    }
    e.stopPropagation();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setAvatar(imageUrl);
      localStorage.setItem("avatar", imageUrl);
    }
  };
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  // Если пользователь не аутентифицирован, перенаправляем на страницу Authorization
  if (!isAuth) {
    return <>{navigate("/Authorization")}</>;
  }

  return (
    <ModalHandler>
      {({
        toggleModal,
        modal,
        modalPosition,
        selectedFilm,
        handleRatingChange,
      }) => (
        <div
          className={styles.account__container}
          onClick={() => modal && toggleModal(null, null)}
        >
          <div className={styles.avatar} onClick={handleImageClick}>
            {image ? (
              <img src={image} alt="Avatar" />
            ) : (
              <img src={avatarDefault} alt="Avatar" />
            )}

            <input
              type="file"
              ref={inputRef}
              onChange={handleImageChange}
              hidden
            />
            <button type="button" onClick={handleImageClick}>
              Change avatar
            </button>
          </div>

          <div className={styles.movieList}>
            <h2>Favorite movies:</h2>
            <ul className={styles.movies}>
              {favorites.length > 0 ? (
                favorites.map((film, index) => (
                  <li key={film.id} className={styles.movie}>
                    <div className={styles.movie__info}>
                      <h3>{`${index + 1}. ${film.title}`}</h3>
                      <p className={styles.release_date}>
                        Release Date: {getYear(film.release_date)}
                      </p>
                      <button
                        className={styles.button_rating}
                        onClick={(e) => toggleModal(film, e)}
                      >
                        <span> Rate the film </span>
                      </button>
                      {userRatings[film.id] && (
                        <p className={styles.personal__raiting}>
                          Your rating: {userRatings[film.id]}
                        </p>
                      )}
                    </div>
                    <p className={styles.rating}>
                      Rating: {getRate(film.vote_average)}
                    </p>
                  </li>
                ))
              ) : (
                <div className={styles.wrapper}>
                  <AccountHelper />
                </div>
              )}
            </ul>
          </div>

          {modal && (
            <ModalRating
              modalPosition={modalPosition}
              toggleModal={() => toggleModal(null, null)}
              handleRatingChange={handleRatingChange}
              userRatings={userRatings}
              selectedFilm={selectedFilm}
            />
          )}
        </div>
      )}
    </ModalHandler>
  );
};

export default Account;
