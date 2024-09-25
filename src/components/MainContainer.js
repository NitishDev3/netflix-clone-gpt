import React from 'react'
import Title from './Title'
import BackgroundVdo from './BackgroundVdo'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[1];

    const {original_title, overview, id} = mainMovie;
    console.log(mainMovie);

    return (
        <div>
            <Title title={original_title} overview={overview}/>
            <BackgroundVdo id={id}/>
        </div>
    )
}

export default MainContainer;