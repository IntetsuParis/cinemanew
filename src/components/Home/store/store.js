import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "./favorites/favorites.slice";

import { ratingReducer } from "./favorites/ratingSlice";
import { avatarReducer } from "./favorites/avatarSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  favorites: favoriteReducer,
  avatar: avatarReducer,
  rating: ratingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
