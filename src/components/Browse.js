import Header from "./Header";
import useGetNowplayingMovies from "../hooks/useGetNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useGetNowplayingMovies();

  return (
    <div className="bg-gradient-to-b from-black h-44">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse;