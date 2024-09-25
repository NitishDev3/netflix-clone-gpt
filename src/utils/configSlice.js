import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        selectedLanguage: "english"
    },
    reducers: {
        changeLang: (state, action) => {
            state.selectedLanguage = action.payload;
        }
    }
})

export const { changeLang } = configSlice.actions;
export default configSlice.reducer;