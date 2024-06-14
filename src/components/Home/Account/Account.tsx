import React, { useState, useRef, useEffect } from "react";
import styles from "./Account.module.scss";

import { useActions } from "../../../hooks/useActions";
import avatarDefault from "./img/avatar.jpg";
import getRate from "../../utils/getRate";
import getYear from "../../utils/getYear";
import { useSelector } from "react-redux";
import ModalRating from "../Modals/ModalRating";

import { RootState } from "../store/store";
import { IFilm } from "../../../@types/film.types";
import ModalHandler from "../Modals/modalHandler";

const Account = () => {
  const { setRating, setAvatar } = useActions();
  const storedImage = useSelector((state: RootState) => state.avatar.image);
  const userRatings = useSelector(
    (state: RootState) => state.rating.userRating
  );
  const favorites = useSelector((state: RootState) => state.favorites);

  const [image, setImage] = useState<string>(avatarDefault);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (storedImage) {
      setImage(storedImage);
    } else {
      setImage(avatarDefault);
    }
  }, [storedImage]);

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
    }
  };

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
            <img src={image} alt="Avatar" />
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
              {favorites.map((film, index) => (
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
              ))}
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
