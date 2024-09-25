import Header from "./Header";
import useGetNowplayingMovies from "../hooks/useGetNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { NOWPLAYING, POPULAR } from "../utils/constant";
import useGetPopularMovies from "../hooks/useGetPopularMovies";
import GptPage from "./GptPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptPageShow = useSelector(store => store.gpt.gptPageShow)
  useGetNowplayingMovies(NOWPLAYING);
  useGetPopularMovies(POPULAR);

  return (
    <div className="bg-gradient-to-b from-black h-44">
      <Header />
      {gptPageShow ?
        <GptPage /> :
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }

    </div>
  )
}

export default Browse;