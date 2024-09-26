import MovieTile from "./MovieTile"

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

export default MovieRibbon;