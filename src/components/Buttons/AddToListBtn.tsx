import { useSelectedMovie } from "../../context/SelectedMovieContext";
import { useMyList } from "../../context/MyListContext";

function AddToListBtn() {
  const { selectedMovie } = useSelectedMovie();
  const { addToList, moviesList } = useMyList();

  console.log(moviesList);

  return (
    <button
      className="p-5 2xl:p-6 rounded-lg bg-navGradient cursor-pointer w-full max-w-[192px] 2xl:max-w-[250px] block font-bold 2xl:text-lg hover:bg-opacity-60 transition-all"
      onClick={() => selectedMovie && addToList(selectedMovie)}
    >
      Add to list
    </button>
  );
}

export default AddToListBtn;
