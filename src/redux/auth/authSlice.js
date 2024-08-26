/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  error: "",
  status: false,
};

export const registerThunk = createAsyncThunk("register", async payload => {
  try {
    // eslint-disable-next-line no-undef
    const { data } = await axios.post(
      `https://651d530044e393af2d598f43.mockapi.io/api/v1/register`,
      payload
    );
    return data;
  } catch (error) {
    return error.message;
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerThunk.pending, state => {
        state.status = true;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.status = false;
        state.data.push(action.payload);
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
