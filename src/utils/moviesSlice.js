import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        mainTrailer: null,
    },
    reducers : {
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addMainTrailer : (state, action) =>{
            state.mainTrailer = action.payload;
        }
    }
})


export const {addNowPlayingMovies, addMainTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;