import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: "",
  error: "",
};

export const fetchProducts = createAsyncThunk("fetch-products", async () => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products", {});
    return data;
  } catch (error) {
    return error.message;
  }
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = "loading...";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failure";
        state.error = action.error.message;
      });
  },
});

export const getAllProducts = state => state.products;

export default productSlice.reducer;
