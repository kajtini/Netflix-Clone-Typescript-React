import MoreInfoBtn from "../MoreInfoBtn";
import LowGradient from "../LowGradient";
import { Movie } from "../../App";

type MainPageMovieProps = {
  currentMovie: Movie | null;
};

function MainPageMovie({ currentMovie }: MainPageMovieProps) {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path}`}
        alt="movie image"
        className="w-full object-cover opacity-80
            
            "
      />
      <LowGradient />

      <div
        className="absolute top-[50%] left-[5%]
            translate-y-[-50%] flex flex-col items-start"
      >
        <h1 className="text-8xl font-bold max-w-3xl mb-4">
          {currentMovie?.name}
        </h1>
        <p className="max-w-xl text-xl mb-8 leading-9">
          {currentMovie?.overview.split(".")[0]}...
        </p>
        <MoreInfoBtn />
      </div>
    </>
  );
}

export default MainPageMovie;
