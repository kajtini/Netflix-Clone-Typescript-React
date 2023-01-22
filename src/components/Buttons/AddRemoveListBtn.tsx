import { useSelectedMovie } from "../../context/SelectedMovieContext";
import { useMyList } from "../../context/MyListContext";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";

type AddToListBtnProps = {
  action: "add" | "remove";
};

function AddToListBtn({ action }: AddToListBtnProps) {
  const { selectedMovie } = useSelectedMovie();
  const { addToList, removeFromList } = useMyList();

  return (
    <button
      className="flex w-full max-w-[300px] cursor-pointer items-end justify-center gap-3 rounded-lg bg-navGradient p-5 font-bold transition-all hover:bg-opacity-60  2xl:p-6 2xl:text-lg"
      onClick={
        action === "add"
          ? () => selectedMovie && addToList(selectedMovie)
          : () => selectedMovie && removeFromList(selectedMovie)
      }
    >
      {action === "add" ? (
        <IoMdAddCircleOutline size={25} />
      ) : (
        <CiCircleRemove size={25} />
      )}
      {action === "add" ? "Add to list" : "Remove from the list"}
    </button>
  );
}

export default AddToListBtn;
