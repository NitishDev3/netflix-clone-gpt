import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MOVIES_OPTIONS } from '../utils/constant';
import { addPopularMovies } from '../utils/moviesSlice';

const useGetPopularMovies = (RIBBONURL) => {
  
    const dispatch = useDispatch();
    const popularMovies = useSelector(store=>store.movies.popularMovies);

    const getPopularMovies = async (RIBBONURL) => {
      const data = await fetch(RIBBONURL, MOVIES_OPTIONS);
      const json = await data.json();
    //   console.log(json.results);

      dispatch(addPopularMovies(json.results));
    };
  
    useEffect(()=>{
        !popularMovies && getPopularMovies(RIBBONURL);
    },[]);

}

export default useGetPopularMovies