
"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const frtchApicongid = createAsyncThunk(
//   "users/fetchByIdStatus",
//   async (userId, thunkAPI) => {
//     const response = await  
//     return response.data;
//   }
// );



export const homeSlice = createSlice({
  name: "Home",
  initialState: {
    url: {  },
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

  // extraReducers: (builder) => {
  //   // Add reducers for additional action types here, and handle loading state as needed
  //   builder.addCase(frtchApicongid.fulfilled, (state, action) => {
  //     // Add user to the state array
  //     state.url = action.payload;
  //   });
  // },
});

// Action creators are generated for each case reducer function
export const { frtchApicongid, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
 
