import { createSlice } from "@reduxjs/toolkit";

const FAKE_USER = {
  name: "ojan",
  email: "ojan56@gmail.com",
  password: "123456",
  avatar: "https://i.pravatar.cc/150?img=58",
};

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      try {
        const { email, password } = action.payload;
        if (email === FAKE_USER.email && password === FAKE_USER.password) {
          state.user = FAKE_USER;
          state.isAuthenticated = true;
        } else {
          console.log("Invalid login attempt.");
        }
      } catch (error) {
        console.error("Error in login:", error);
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
