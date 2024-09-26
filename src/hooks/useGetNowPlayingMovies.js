import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { MOVIES_OPTIONS } from "../utils/constant";
import { useEffect } from "react";


const useGetNowplayingMovies = (RIBBONURL) =>{
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies)

    const getNowPlayingMovies = async (RIBBONURL) => {
      const data = await fetch(RIBBONURL, MOVIES_OPTIONS);
      const json = await data.json();
    //   console.log(json.results);

      dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(()=>{
      !nowPlayingMovies && getNowPlayingMovies(RIBBONURL);
    },[]);
}

export default useGetNowplayingMovies;