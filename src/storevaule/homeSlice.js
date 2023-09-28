
"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataApi } from "../utils/apidata";
import { BsUiChecksGrid } from "react-icons/bs";


const getGenres = createAsyncThunk("users/fetchByIdStatus", async () => {
  let allGenre = {};
  let endpoints = ["tv", "movie"];
  let promies = [];
  endpoints.forEach((endpoint) => {
    promies.push(fetchDataApi(`/genre/${endpoint}/list`));
  });
    
  const data = await Promise.all(promies);
  data.map(({ genres }) => {
    return genres.map((item) => (allGenre[item.id] = item.name));
  });
  return allGenre;
});

export const homeSlice = createSlice({
  name: "Home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    frtchApicongid: (state, action) => {
      state.url = action.payload;
    },
   
  },
  extraReducers: (builder) => {
  
    builder.addCase(getGenres.fulfilled, (state, action) => {
    
      state.genres = action.payload;
    });
  },

  // extraReducers: (builder) => {
  //   builder.addCase(frtchApicongid.fulfilled, (state, action) => {
  //     state.url = action.payload;
  //   });
  // },
});

export const { frtchApicongid,} = homeSlice.actions;

export default homeSlice.reducer;
 
