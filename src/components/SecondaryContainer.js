import React from 'react'
import MovieTile from './MovieTile'
import { useSelector } from 'react-redux'

const MovieRibbon = ({ movieRibbonTitle, moviesTileList }) => {
  return (

    <div className='text-white py-5 flex justify-center'>
      <div className='w-[97%]'>
        <div className='flex'>
          <h1 className='mx-[3px] text-xl font-semibold z-10'>{movieRibbonTitle}</h1>
        </div>
        <div className='flex overflow-x-scroll custom-scrollbar'>
          <div className='flex z-10'>
            {
              moviesTileList.map((movie) =>
                <MovieTile key={movie?.id} posterPath={movie?.poster_path} />
              )
            }
          </div>
        </div>
      </div>
    </div>

  )
}


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