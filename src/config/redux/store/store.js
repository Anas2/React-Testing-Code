import { configureStore } from "@reduxjs/toolkit";
import user from "../reducer/userSlice";
import themeSlice from '../reducer/themeSlice';

const store = configureStore({
  reducer: { user,themeSlice },
});

export default store;