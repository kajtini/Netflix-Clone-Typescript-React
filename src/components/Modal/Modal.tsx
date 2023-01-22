import { Movie } from "../../App";
import { useMyList } from "../../context/MyListContext";
import AddToListBtn from "../Buttons/AddRemoveListBtn";
import ModalHeader from "./ModalHeader";
import { FaWindowClose } from "react-icons/fa";
import { useModal } from "../../context/ModalContext";
import closeIcon from "../../assets/close-button.png";

type ModalProps = {
  movie: Movie | null;
};

function Modal({ movie }: ModalProps) {
  const { closeModal } = useModal();
  const { checkIfInList, moviesList } = useMyList();

  return (
    <>
      {movie && (
        <div className="fixed top-[50%] left-[50%] z-[100] max-h-screen w-full translate-x-[-50%] translate-y-[-50%] overflow-hidden overflow-y-scroll rounded-lg scrollbar-hide sm:w-auto">
          <div className="relative">
            <img
              className="block max-h-[200px] w-full object-cover sm:max-h-[400px] 2xl:max-h-[500px]"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="movie image"
            />
            <img
              className="absolute top-[5%] right-[5%] max-h-16 cursor-pointer fill-primary sm:right-[3%]"
              src={closeIcon}
              alt="close icon"
              onClick={closeModal}
            />
            {/* <FaWindowClose
              size={40}
              className="absolute top-[5%] right-[5%] cursor-pointer fill-primary sm:right-[3%]"
              onClick={closeModal}
            /> */}
          </div>

          <div className="bg-primary  p-10">
            <ModalHeader movie={movie} />
            {movie.overview && <hr className="my-5 opacity-10 2xl:my-8" />}
            <p className="mb-8 leading-8 2xl:text-xl 2xl:leading-10">
              {movie.overview}
            </p>

            {checkIfInList(movie) ? (
              <AddToListBtn action="remove" />
            ) : (
              <AddToListBtn action="add" />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
