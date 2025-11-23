import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";
import { googleAuthApi } from "./User/googleAuthApi";

export const store = configureStore({
  reducer: {
    users: userReducer,
    [googleAuthApi.reducerPath]: googleAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(googleAuthApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
