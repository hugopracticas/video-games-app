import { createSlice } from "@reduxjs/toolkit";

export const gamesSlices = createSlice({
  name: 'game',
  initialState: {
    games: [],
    isLoading: false,
    status: 0,
    page: 1,
    pageBack: 1
  },
  reducers:{
    startLoadingGames: (state, /**action */) => {
      state.isLoading = true
    },
    setGames: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.status;
      state.games = action.payload.games;
      state.page = action.payload.page;
      state.pageBack = action.payload.pageBack;
    }
  }
});

export const { startLoadingGames, setGames } = gamesSlices.actions;