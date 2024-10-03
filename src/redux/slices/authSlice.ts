// // src/redux/slices/authSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface AuthState {
//   isAuthenticated: boolean;
//   userRole: 'admin' | 'teacher' | 'student' | 'parent' | null;
// }

// const initialState: AuthState = {
//   isAuthenticated: false,
//   userRole: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login: (state, action: PayloadAction<{ role: AuthState['userRole'] }>) => {
//       state.isAuthenticated = true;
//       state.userRole = action.payload.role;
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.userRole = null;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type UserRole = "admin" | "student" | "teacher" | "parent" | null;

interface AuthState {
  isAuthenticated: boolean;
  userRole: UserRole;
}

const initialState: AuthState = {
  isAuthenticated: false,
  userRole: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<UserRole>) {
      state.isAuthenticated = true;
      state.userRole = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userRole = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

// Selectors for accessing state
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectUserRole = (state: RootState) => state.auth.userRole;

export default authSlice.reducer;
