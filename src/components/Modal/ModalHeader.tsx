import { Movie } from "../../App";

type ModalHeaderProps = {
  movie: Movie;
};

function ModalHeader({ movie }: ModalHeaderProps) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-16 ">
      <div>
        <h1 className="mb-1 text-3xl font-bold sm:text-4xl 2xl:mb-5 2xl:text-6xl">
          {movie.title ? movie.title : movie.name}{" "}
        </h1>
        <p className="text-base opacity-50 sm:text-lg 2xl:text-xl">
          {movie.first_air_date}
        </p>
      </div>
      <div>
        <p className="mb-1 whitespace-nowrap font-bold sm:text-lg 2xl:mb-2 2xl:text-2xl">
          Vote Count{" "}
          <span className="text-rating-green">{movie.vote_count}</span>
        </p>
        <p className="whitespace-nowrap font-bold sm:text-lg 2xl:text-2xl">
          Vote Average{" "}
          <span className="text-rating-green">{movie.vote_average}</span>
        </p>
      </div>
    </div>
  );
}

export default ModalHeader;
