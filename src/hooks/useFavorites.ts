import { useSelector } from "react-redux";
import { RootState } from "../components/Home/store/store";

export const useFavorites = () => {
  const { favorites } = useSelector((state: RootState) => state);

  return { favorites };
};
