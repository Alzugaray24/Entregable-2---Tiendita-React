import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      user: null,
      token: null,
      localId: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.email;
      state.token = action.payload.idToken;
      state.localId = action.payload.localId;
    },
    setLogout: (state, action) => {
      state.user = null;
      state.token = null;
      state.localId = null;
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
      state.localId = null;
    },
  },
});

export const { setUser, setLogout, clearUser } = authSlice.actions;
export default authSlice.reducer;
