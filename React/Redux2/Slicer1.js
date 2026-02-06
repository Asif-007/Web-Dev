import { createSlice } from "@reduxjs/toolkit";

const reactSlicer = createSlice({
  name: "slice1",
  initialState: { count: 0 },
  reducers: {
    Increment: (state) => {
      state.count+=1;
    },
    Decrement: (state) => {
      state.count = state.count - 1;
    },
    Reset: (state) => {
      state.count = 0;
    },
    CustomIncrement: (state, action) => {
      state.count += action.payload;
    }
  },
});

console.log(reactSlicer);

export const { Increment, Decrement, Reset, CustomIncrement } = reactSlicer.actions;

export default reactSlicer.reducer;

// Increment: (state) => {
//   return { ...state, count: state.count + 1 };
// };