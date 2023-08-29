"use client";
import { configureStore } from "@reduxjs/toolkit";
import { createThunkMiddleware } from '@reduxjs/toolkit';
import homeSlice from  './homeSlice'

  const store = configureStore({
  reducer: {
    home: homeSlice,
  },
  applyMiddleware(createThunkMiddleware())
});


export default store;