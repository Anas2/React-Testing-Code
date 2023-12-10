import React from 'react';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isDark: false
};

export const themeSlice = createSlice({
    name: "themeSlice",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            console.log(state.isDark,action.payload);
            const { isDark } = action.payload;
            state.isDark = isDark;

        },
        resetTheme: (state) => {

            state.isDark = false;

        },
    },
});

export const { setTheme, resetTheme } = themeSlice.actions;

export default themeSlice.reducer;