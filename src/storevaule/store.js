"use client";
import { configureStore } from "@reduxjs/toolkit";
import { createThunkMiddleware } from '@reduxjs/toolkit';
import homeSlice from  './homeSlice'

  const store = configureStore({
  reducer: {
    home: homeSlice,
  },

});


export default store;