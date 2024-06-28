import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useFavorites = () => {
  const { favorites } = useSelector((state: RootState) => state);

  return { favorites };
};
