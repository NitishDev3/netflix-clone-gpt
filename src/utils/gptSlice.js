import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptPageShow : false,
    },
    reducers:{
        gptSearchClick : (state) =>{
            state.gptPageShow = !state.gptPageShow;
        }
    }
})

export const {gptSearchClick} = gptSlice.actions;

export default gptSlice.reducer;