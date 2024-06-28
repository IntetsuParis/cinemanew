import React from "react";
import styles from "./ModalRating.module.scss";
import { IFilm } from "../../@types/film.types";
import { ModalProps } from "@mui/material";

interface IModalPosition {
  top: number;
  left: number;
}

interface IModalRatingProps {
  modalPosition: IModalPosition;
  toggleModal: () => void;
  handleRatingChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userRatings: { [key: number]: number }; // Change this to be an object with film IDs as keys
  selectedFilm?: IFilm | null;
}

const ModalRating: React.FC<IModalRatingProps> = ({
  modalPosition,
  toggleModal,
  handleRatingChange,
  userRatings,
  selectedFilm,
}) => {
  return (
    <div
      className={styles.modal}
      style={{ top: modalPosition.top, left: modalPosition.left }}
    >
      <div className={styles.overlay} onClick={toggleModal}></div>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.rating}>
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index + 1} className={styles.ratingItem}>
              <label>
                <input
                  onChange={handleRatingChange}
                  type="radio"
                  name="rating"
                  value={index + 1}
                  checked={
                    selectedFilm
                      ? userRatings[selectedFilm.id] == index + 1
                      : false
                  }
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
  );
};

export default ModalRating;
