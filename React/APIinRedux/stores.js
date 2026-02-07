import { configureStore } from "@reduxjs/toolkit";
import slicer1 from "./slicer1";
const store = configureStore({
  reducer: {
    slice1: slicer1,
  },
});

export default store;
