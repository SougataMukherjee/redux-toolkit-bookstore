import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter-app",
  initialState,
  reducers: {
    Increment: state => {
      state.count += 1;
    },
    Decrement: state => {
      state.count -= 1;
    },
    Reset: state => {
      state.count = 0;
    },
    IncrementByPayload: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { Increment, Decrement, Reset, IncrementByPayload } =
  counterSlice.actions;

export default counterSlice.reducer;
