import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategoryProducts = createAsyncThunk(
  "product/fetchCategoryProducts",
  async (category, { rejectWithValue }) => {
    try {
      const url =
        category === "all"
          ? "https://infikey-store.onrender.com/api/product/"
          : `https://infikey-store.onrender.com/api/product/${category}`;
      const response = await axios.get(url);
      // console.log(`Fetched Products:${category}`, response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to fetch products" }
      );
    }
  }
);

export const productDetails = createAsyncThunk(
  "product/productDetails",
  async (id) => {
    // console.log("Product ID:", id);
    const response = await axios.get(
      `https://infikey-store.onrender.com/api/product/${id}`
    );
    // console.log("ProductDetails:", response.data.product);
    return response.data.product[0];
  }
);

export const productReview = createAsyncThunk(
  "product/productReview",
  async ({ productId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://infikey-store.onrender.com/api/product/review/${productId}`
      );
      // console.log("Product Review:", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to fetch product review" }
      );
    }
  }
);

export const submitProductReview = createAsyncThunk(
  "product/submitProductReview",
  async ({ productId, comment }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://infikey-store.onrender.com/api/product/review/${productId}`,
        {comment},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to submit product review" }
      );
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    review: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(fetchCategoryProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(productDetails.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(productDetails.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(productDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(productReview.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(productReview.fulfilled, (state, action) => {
        state.status = "success";
        state.review = action.payload;
      })
      .addCase(productReview.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(submitProductReview.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(submitProductReview.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(submitProductReview.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export default productSlice.reducer;
