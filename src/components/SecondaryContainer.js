import React from 'react'
import MovieRibbon from './MovieRibbon'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {

  const moviesTileNow = useSelector(store => store?.movies?.nowPlayingMovies);
  const movieTileTop = useSelector(store => store.movies.popularMovies)
  // console.log(MoviesTileList)

  return moviesTileNow === null || movieTileTop === null ? <></> :
    (
      <div className='bg-black'>
        <div className='mt-[-100px]'>
          <MovieRibbon movieRibbonTitle={"Now Playing Movies"} moviesTileList={moviesTileNow} />
        </div>
        <MovieRibbon movieRibbonTitle={"Top Rated Movies"} moviesTileList={movieTileTop} />
      </div>
    )
}

export default SecondaryContainer