import { AiOutlineInfoCircle } from "react-icons/ai";
import { Movie } from "../App";
import { useSelectedMovie } from "../context/SelectedMovieContext";
import { useModal } from "../context/ModalContext";

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
      className="flex items-center gap-2 font-bold text-2xl bg-[#4f504a] py-3 px-6 rounded-lg bg-opacity-70 cursor-pointer justify-center hover:bg-opacity-40 transition-all"
      onClick={handleClick}
    >
      <AiOutlineInfoCircle size={25} />
      Learn More
    </button>
  );
}

export default MoreInfoBtn;
