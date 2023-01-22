import MoreInfoBtn from "../Buttons/MoreInfoBtn";
import { Movie } from "../../App";

type MainPageMovieProps = {
  currentMovie: Movie | null;
};

function MainMovie({ currentMovie }: MainPageMovieProps) {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path}`}
        alt="movie image"
        className="w-full object-cover opacity-80
            
            "
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-primary to-transparent"></div>

      <div
        className="absolute top-[50%] left-[5%]
            flex translate-y-[-50%] flex-col items-start"
      >
        <h1 className="mb-4 max-w-3xl text-3xl font-bold sm:text-5xl xl:text-8xl">
          {currentMovie?.name}
        </h1>
        <p className="mb-8 hidden max-w-lg leading-7 lg:block lg:max-w-xl lg:text-lg lg:leading-9 xl:text-xl xl:leading-9">
          {currentMovie?.overview.split(".")[0]}...
        </p>
        <MoreInfoBtn movie={currentMovie} />
      </div>
    </>
  );
}

export default MainMovie;
