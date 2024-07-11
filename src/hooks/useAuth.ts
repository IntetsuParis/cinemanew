import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export function useAuth() {
  const { email, token, id, isAuth } = useSelector(
    (state: RootState) => state.user
  );
  return {
    isAuth: isAuth,
    email: email,
    token: token,
    id: id,
  };
}
