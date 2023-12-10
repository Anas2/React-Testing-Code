import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  email: "",
  username: "",
  auth: false,
  photo : "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { _id, email, username, auth, photo } = action.payload;

      state._id = _id;
      state.email = email;
      state.username = username;
      state.auth = auth;
      state.photo = photo;
    },
    resetUser: (state) => {
      state._id = "";
      state.email = "";
      state.username = "";
      state.auth = false;
      state.photo = "";
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;