import { useSelector } from "react-redux";
import useGetTrailer from "../hooks/useGetTrailer"

const BackgroundVdo = ({ id }) => {
    const mainTrailer = useSelector(store => store.movies?.mainTrailer);
    useGetTrailer(id);

    if(!mainTrailer) return;
        
    return (
        <div>
            <iframe
                className="w-full aspect-video"
                src= {`https://www.youtube.com/embed/${mainTrailer.key}?&autoplay=1&controls=0&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div>
    )
}

export default BackgroundVdo