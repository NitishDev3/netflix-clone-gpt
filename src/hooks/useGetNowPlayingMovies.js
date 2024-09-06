import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { MOVIES_OPTIONS } from "../utils/constant";
import { useEffect } from "react";


const useGetNowplayingMovies = () =>{
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', MOVIES_OPTIONS);
      const json = await data.json();
    //   console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    };
  
  
    useEffect(()=>{
      getNowPlayingMovies();
    },[]);
}

export default useGetNowplayingMovies;