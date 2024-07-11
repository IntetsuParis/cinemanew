import React, { useEffect, useState } from "react";
import styles from "./ActorDetails.module.scss";
import getImageActor from "../../utils/getImageActor";
import { useLocation, useParams } from "react-router-dom";
import { API_KEY } from "../../../.env.js";
import { Actor } from "../../../@types/actors.types";
import axios from "axios";
interface AccountDetails extends Actor {
  biography: string;
}
type AccountDetailsProps = {
  id: string;
};

const ActorDetails: React.FC = () => {
  const { id } = useParams<AccountDetailsProps>();
  const [actorDetails, setActorDetails] = useState<AccountDetails | null>(null);
  useEffect(() => {
    const fetchActorDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}`
        );
        setActorDetails(response.data);
        console.log("Actors details", response.data);
      } catch (error) {
        console.error("Error fetching actor details", error);
      }
    };
    fetchActorDetails();
  }, []);
  if (!actorDetails) return <div>Loading...</div>;
  return (
    <div className={styles.container}>
      <div className={styles.details__left}>
        <img
          src={getImageActor(actorDetails.profile_path)}
          alt="Photo of actor"
        />
      </div>
      <div className={styles.detail__right}>
        <h2>{actorDetails.name}</h2>
        <p>Birthday: {actorDetails.birthday}</p>
        <p>Place of Birth: {actorDetails.place_of_birth}</p>
        <p>Biography: {actorDetails.biography}</p>
      </div>
    </div>
  );
};

export default ActorDetails;
