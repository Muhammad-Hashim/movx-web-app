
"use client";
import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "Hsome",
  initialState: {
    url: { hashIN: "8582853582" },
    genres: {},
  },
  reducers: {
    frtchApicongid: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
 