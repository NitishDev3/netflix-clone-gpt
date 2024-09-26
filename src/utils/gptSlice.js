import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptPageShow: false,
        recommendedMovies: [],
    },
    reducers: {
        gptSearchClick: (state) => {
            if(state.gptPageShow){state.recommendedMovies.length = 0}
            state.gptPageShow = !state.gptPageShow;
        },
        addRecommendedMovies: (state, action) => {
            state.recommendedMovies.push(action.payload);
        },
        removeRecommendedMovies: (state) => {
            state.recommendedMovies.length = 0;
        }
    }
})

export const { gptSearchClick, addRecommendedMovies, removeRecommendedMovies } = gptSlice.actions;

export default gptSlice.reducer;