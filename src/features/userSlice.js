import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Load stored user
const storedUser = JSON.parse(localStorage.getItem("user"));
const storedToken = localStorage.getItem("token");

export const SignUpUser = createAsyncThunk(
  "user/signup",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://infikey-store.onrender.com/api/user/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    if (!response.ok) return rejectWithValue(result.message);
    return result;
  }
);

export const LoginUser = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://infikey-store.onrender.com/api/user",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    if (!response.ok) return rejectWithValue(result.message);
    return result;
  }
);

export const ShowProfile = createAsyncThunk(
  "user/profile",
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
      "https://infikey-store.onrender.com/api/user/profile",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const result = await response.json();
    if (!response.ok) return rejectWithValue(result.message);

    return result;
  }
);

// Slice
const userSlice = createSlice({
  name: "userDetail",
  initialState: {
    user: storedUser || null,
    token: storedToken || null,
    loading: false,
    error: null,
    isAuthenticated: !!storedUser,
    message: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.message = action.payload.message;

        // Save to localStorage
        localStorage.setItem("user", JSON.stringify(action.payload.data));
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })

      .addCase(ShowProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        state.isAuthenticated = true;

        // Save user only (token does not come again)
        localStorage.setItem("user", JSON.stringify(action.payload.data));
      });
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
