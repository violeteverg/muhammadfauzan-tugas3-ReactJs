import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";

const FAKE_USER = {
  name: "ojan",
  email: "ojan56@gmail.com",
  password: "123456",
  avatar: "https://i.pravatar.cc/150?img=58",
};

const intialState = {
  user: null,
  isAuthenticated: false,
};

export const login = createAsyncThunk("login", async ({ email, password }) => {
  if (email === FAKE_USER.email && password === FAKE_USER.password) {
    return FAKE_USER;
  } else {
    throw new Error("invalid user");
  }
});

const authReducer = createReducer(intialState, (builder) => {
  builder.addCase("logout", (state) => {
    (state.user = null), (state.isAuthenticated = false);
  });
});

const authSlices = createSlice({
  name: "auth",
  initialState: intialState,
  reducers: {
    logout: authReducer,
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      (state.user = action.payload), (state.isAuthenticated = true);
    });
  },
});

export const { logout } = authSlices.actions;
export default authSlices.reducer;
