import React, { useState, useRef } from "react";
import styles from "./Account.module.scss";

import { useActions } from "../../../hooks/useActions";
import avatar from "./img/avatar.jpg";
import getRate from "../../utils/getRate";
import getYear from "../../utils/getYear";
import { useSelector } from "react-redux";

const Account = () => {
  const { setRating, setAvatar } = useActions();
  const storedImage = useSelector((state) => state.avatar.image); // Получаем изображение аватара из состояния Redux
  const userRatings = useSelector((state) => state.rating.userRating); // Получаем рейтинги пользователя из состояния Redux
  const favorites = useSelector((state) => state.favorites); // Получаем избранные фильмы из состояния Redux

  const [image, setImage] = useState(storedImage);
  const [modal, setModal] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const inputRef = useRef(null);

  const toggleModal = (film = null, event = null) => {
    if (event) {
      const buttonRect = event.target.getBoundingClientRect();
      setModalPosition({
        top: buttonRect.top + window.scrollY,
        left: buttonRect.left + window.scrollX,
      });
    }
    setSelectedFilm(film);
    setModal(!modal);

    if (!modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  };

  const handleImageClick = (e) => {
    inputRef.current.click();
    e.stopPropagation();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setAvatar(imageUrl); // Используем setAvatar из useActions
    }
  };

  const handleRatingChange = (event) => {
    if (selectedFilm) {
      const rating = event.target.value;
      setRating({ filmId: selectedFilm.id, rating }); // Используем setRating из useActions
    }
  };

  return (
    <div
      className={styles.account__container}
      onClick={() => modal && setModal(false)}
    >
      <div className={styles.avatar} onClick={handleImageClick}>
        <img src={image || avatar} alt="Avatar" />
        <input type="file" ref={inputRef} onChange={handleImageChange} hidden />
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
                  Rate the film
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
        <div
          className={styles.modal}
          style={{ top: modalPosition.top, left: modalPosition.left }}
        >
          <div className={styles.overlay} onClick={toggleModal}></div>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.rating}>
              {Array.from({ length: 10 }, (_, index) => (
                <div key={index + 1} className={styles.ratingItem}>
                  <label>
                    <input
                      onChange={handleRatingChange}
                      type="radio"
                      name="rating"
                      value={index + 1}
                      checked={userRatings[selectedFilm?.id] == index + 1}
                    />
                    {index + 1}
                  </label>
                </div>
              ))}
            </div>
            <button className={styles.closeModal} onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
