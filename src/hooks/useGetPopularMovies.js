import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { MOVIES_OPTIONS } from '../utils/constant';
import { addPopularMovies } from '../utils/moviesSlice';

const useGetPopularMovies = (RIBBONURL) => {
  
    const dispatch = useDispatch();

    const getPopularMovies = async (RIBBONURL) => {
      const data = await fetch(RIBBONURL, MOVIES_OPTIONS);
      const json = await data.json();
    //   console.log(json.results);

      dispatch(addPopularMovies(json.results));
    };
  
    useEffect(()=>{
        getPopularMovies(RIBBONURL);
    },[]);

}

export default useGetPopularMovies