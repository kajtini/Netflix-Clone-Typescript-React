import { AiOutlineInfoCircle } from "react-icons/ai";
import { Movie } from "../../App";
import { useSelectedMovie } from "../../context/SelectedMovieContext";
import { useModal } from "../../context/ModalContext";

type MoreInfoBtnProps = {
  movie: Movie | null;
};

function MoreInfoBtn({ movie }: MoreInfoBtnProps) {
  const { setSelectedMovie } = useSelectedMovie();
  const { openModal } = useModal();

  function handleClick() {
    openModal();
    setSelectedMovie(movie);
  }

  return (
    <button
      className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#4f504a] bg-opacity-70 py-2 px-3 font-bold transition-all hover:bg-opacity-40 sm:py-3 sm:px-6 lg:text-xl xl:text-2xl"
      onClick={handleClick}
    >
      <AiOutlineInfoCircle size={20} />
      Learn More
    </button>
  );
}

export default MoreInfoBtn;
