import { configureStore } from "@reduxjs/toolkit";
import { gamesSlices } from "./slices/games/gamesSlices";

export const store = configureStore({
  reducer: {
    games: gamesSlices.reducer
  }
})