import { configureStore, combineReducers } from "@reduxjs/toolkit";

import storageSession from "redux-persist/lib/storage/session";
import logger from "redux-logger";
import userReducer from "./User/userSlice";
import { apiSlice } from "../api/apiSlice";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const reducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
const middlewares = [process.env.NODE_ENV !== "production" && logger].filter(Boolean);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware, middlewares),
});
