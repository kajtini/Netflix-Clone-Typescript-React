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
      <div className="bg-gradient-to-t from-primary to-transparent absolute top-0 left-0 right-0 bottom-0"></div>

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
        <MoreInfoBtn movie={currentMovie} />
      </div>
    </>
  );
}

export default MainMovie;
