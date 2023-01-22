import { Movie } from "../../App";
import { useModal } from "../../context/ModalContext";

type MovieRowElementProps = {
  movie: Movie;
  movies: Array<Movie>;
  handleClick: (id: number, movies: Array<Movie>) => void;
  id: number;
};

function MovieRowElement({
  movie,
  handleClick,
  id,
  movies,
}: MovieRowElementProps) {
  const { openModal } = useModal();

  return (
    <li
      className="relative flex-shrink-0 cursor-pointer"
      onClick={() => {
        openModal();
        handleClick(id, movies);
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt="movie image"
        className="max-h-32 rounded-lg sm:max-h-44 2xl:max-h-80"
      />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all hover:bg-primary hover:bg-opacity-70 hover:opacity-100">
        <span className="flex w-full max-w-[256px] flex-col text-center text-xl font-bold hover:block sm:text-2xl">
          {movie.title ? movie.title : movie.name}
        </span>
      </div>
    </li>
  );
}

export default MovieRowElement;
