import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        mainTrailer: null,
        popularMovies: null,
    },
    reducers : {
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addMainTrailer : (state, action) =>{
            state.mainTrailer = action.payload;
        },
        addPopularMovies : (state, action) =>{
            state.popularMovies = action.payload;
        },
    }
})


export const {addNowPlayingMovies, addMainTrailer, addPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer;