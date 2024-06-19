import React, { useMemo, useState } from "react";
import { IFilm } from "../../../@types/film.types";
import { useActions } from "../../../hooks/useActions";

interface IModalHandlerProps {
  children: (props: {
    toggleModal: (
      film: IFilm | null,
      event: React.MouseEvent<HTMLButtonElement | HTMLDivElement> | null
    ) => void;
    modal: boolean;
    modalPosition: { top: number; left: number };
    selectedFilm: IFilm | null;
    handleRatingChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) => React.ReactNode;
}

const ModalHandler: React.FC<IModalHandlerProps> = ({ children }) => {
  const { setRating, setAvatar } = useActions();
  const [modal, setModal] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState<IFilm | null>(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const toggleModal = (
    film: IFilm | null = null,
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement> | null = null
  ) => {
    if (event) {
      const buttonRect = (event.target as HTMLElement).getBoundingClientRect();
      setModalPosition({
        top: buttonRect.top + window.scrollY,
        left: buttonRect.left + window.scrollX,
      });
    }
    setSelectedFilm(film);
    setModal((prevModal) => !prevModal);

    if (!modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  };

  const handleRatingChange = useMemo(
    () => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (selectedFilm) {
        const rating = event.target.value;
        setRating({ filmId: selectedFilm.id, rating }); // Используем setRating из useActions
      }
    },
    [selectedFilm, setRating]
  );

  return (
    <>
      {children({
        toggleModal,
        modal,
        modalPosition,
        selectedFilm,
        handleRatingChange,
      })}
    </>
  );
};

export default ModalHandler;
