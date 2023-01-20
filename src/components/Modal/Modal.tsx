import { Movie } from "../../App";
import AddToListBtn from "../Buttons/AddToListBtn";

type ModalProps = {
  movie: Movie | null;
};

function Modal({ movie }: ModalProps) {
  return (
    <>
      {movie && (
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[100] rounded-lg overflow-hidden">
          <div className="relative">
            <img
              className="block max-h-[400px] 2xl:max-h-[580px] w-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="movie image"
            />
          </div>

          <div className="bg-primary p-10">
            <div className="flex items-center justify-between gap-16  ">
              <div>
                <h1 className="font-bold text-4xl 2xl:text-6xl mb-1 2xl:mb-5">
                  {movie.name}{" "}
                </h1>
                <p className="text-lg opacity-50 2xl:text-xl">
                  {movie.first_air_date}
                </p>
              </div>
              <div>
                <p className="font-bold 2xl:text-2xl mb-1 whitespace-nowrap text-lg 2xl:mb-2">
                  Vote Count{" "}
                  <span className="text-rating-green">{movie.vote_count}</span>
                </p>
                <p className="font-bold 2xl:text-2xl whitespace-nowrap text-lg">
                  Vote Average{" "}
                  <span className="text-rating-green">
                    {movie.vote_average}
                  </span>
                </p>
              </div>
            </div>

            {movie.overview && <hr className="my-5 opacity-10 2xl:my-8" />}
            <p className="leading-8 2xl:text-xl 2xl:leading-10 mb-8">
              {movie.overview}
            </p>
            <AddToListBtn />
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
