import { useEffect } from "react";
import { MOVIES_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMainTrailer } from "../utils/moviesSlice";

const useGetTrailer = (id) => {

    const dispatch = useDispatch();

    const fetchTrailerVdo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, MOVIES_OPTIONS);
        const json = await data.json();
        // console.log(json.results.filter(video => video.type === "Trailer" && video.name === "Official Trailer"));
        const filteredVdo = json.results.filter(video => video.type === "Trailer");
        const trailer = (filteredVdo.length > 0) ? filteredVdo : json.results[0];
        dispatch(addMainTrailer(trailer[0]));
    }

    useEffect(() => {
        fetchTrailerVdo();
    },[]);

}

export default useGetTrailer