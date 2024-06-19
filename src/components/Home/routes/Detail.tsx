import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Detail.module.scss";
import getYear from "../../utils/getYear";
import getImage from "../../utils/getImage";
import getRate from "../../utils/getRate";
import ReactPlayer from "react-player";
import useDetailApi from "../../utils/useDetailApi";
import Skeleton from "../../Skeleton/Skeleton";
import { HelioCheckout } from "@heliofi/checkout-react"; //
import { API_KEY } from "../../../.env";
import axios from "axios";

interface DetailProps {
  title?: string;
  poster_path?: string;
  release_date: string;
  vote_average?: number;
  id?: number;
}

function Detail() {
  const { state } = useLocation();
  const { title, poster_path, release_date, vote_average } =
    state as DetailProps;
  const { trailerUrl } = useDetailApi();
  const [loading, setLoading] = useState(true);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowTrailer(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  type NetworkType = "main" | "test"; // заглушка для тса
  type DisplayType = "button" | "inline"; // еще одна заглушка
  const helioConfig = {
    paylinkId: "66721781ed17a2d12654dfb9",
    network: "test" as NetworkType,
    display: "button" as DisplayType, // Указываем тип DisplayType для параметра display
    onSuccess: (event: any) => console.log("Успешная оплата:", event), // тут я понятия не имею какой ивент писать вообще
    onError: (event: any) => console.error("Ошибка оплаты:", event),
    onPending: (event: any) => console.log("Ожидание оплаты:", event),
    onCancel: () => console.log("Отмена оплаты"),
    onStartPayment: () => console.log("Начало процесса оплаты"),
  };
  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <div className={styles.detail__container}>
          <div className={styles.detail__left}>
            <img src={getImage(poster_path)} alt={title} />
          </div>
          <div className={styles.detail__right}>
            <h2>{title}</h2>
            <p>Release Date: {getYear(release_date)}</p>
            <p>
              Vote Average:{" "}
              {vote_average !== undefined ? getRate(vote_average) : "-"}
            </p>
          </div>
          <div className={styles.player__wrapper}>
            {showTrailer && trailerUrl && (
              <ReactPlayer
                className={styles.react__player}
                url={trailerUrl}
                controls={true}
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 },
                  },
                }}
              />
            )}
            <div className={styles.payment}>
              <HelioCheckout config={helioConfig} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
