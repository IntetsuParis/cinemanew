import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../components/Home/store/store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

