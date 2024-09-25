import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { MOVIES_OPTIONS } from "../utils/constant";
import { useEffect } from "react";


const useGetNowplayingMovies = (RIBBONURL) =>{
    const dispatch = useDispatch();

    const getNowPlayingMovies = async (RIBBONURL) => {
      const data = await fetch(RIBBONURL, MOVIES_OPTIONS);
      const json = await data.json();
    //   console.log(json.results);

      dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(()=>{
      getNowPlayingMovies(RIBBONURL);
    },[]);
}

export default useGetNowplayingMovies;