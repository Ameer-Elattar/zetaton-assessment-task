import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";

export const store = configureStore({
  reducer: { userSlice: userReducer },
});
