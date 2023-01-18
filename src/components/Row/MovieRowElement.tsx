import { Movie } from "../../App";

type MovieRowElementProps = {
  movie: Movie;
  handleClick: (id: number) => void;
  id: number;
};

function MovieRowElement({ movie, handleClick, id }: MovieRowElementProps) {
  return (
    <li
      className="flex-shrink-0 relative cursor-pointer"
      onClick={() => handleClick(id)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt="movie image"
        className="max-h-44 2xl:max-h-80 rounded-lg"
      />

      <div className="absolute inset-0 hover:bg-primary hover:bg-opacity-70 opacity-0 hover:opacity-100 flex items-center justify-center transition-all">
        <span className="font-bold text-2xl flex flex-col w-full text-center max-w-[256px] hover:block">
          {movie.title ? movie.title : movie.name}
        </span>
      </div>
    </li>
  );
}

export default MovieRowElement;
