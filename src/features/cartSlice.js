import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE = "https://infikey-store.onrender.com/api";

// Add to Cart
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${API_BASE}/addtocart`,
        { productId, quantity },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // console.log("Add to cart response:", response.data.cart);  
      return response.data.cart;
    } catch (error) {
      if(error.response?.status === 401){
        return rejectWithValue("SESSION_EXPIRED");
      }
      return rejectWithValue(
        error.response?.data || { message: "Something went wrong" }
      );
    }
  }
);

// Fetch Cart
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_BASE}/addtocart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log("Fetch cart response:", response.data);
      return response.data.cart; 
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to fetch cart" }
      );
    }
  }
);

// Remove From Cart
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (cartItemId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_BASE}/addtocart/remove/${cartItemId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return cartItemId;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to remove item" }
      );
    }
  }
);

// export const updateCartItem = createAsyncThunk(
//   "cart/updateCartItem",
//   async ({ productId, quantity }, { rejectWithValue }) => {
//     try{
//       const token = localStorage.getItem("token");
//       const response = await 
//     }
//   })

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: { products: [] },
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add to Cart
      .addCase(addToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = "success";
        state.cart = action.payload || { products: [] };
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Fetch Cart
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "success";
        state.cart = action.payload || { products: [] };
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Remove From Cart
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.status = "success";
        const removedId = action.payload;
        state.cart.products = state.cart.products.filter(
          (item) => item._id !== removedId
        );
      });
  },
});

export default cartSlice.reducer;
