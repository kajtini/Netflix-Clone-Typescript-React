import Navbar from "../components/Navbar/Navbar";
import { useMyList } from "../context/MyListContext";
import Modal from "../components/Modal/Modal";
import { useModal } from "../context/ModalContext";
import { useSelectedMovie } from "../context/SelectedMovieContext";
import Backdrop from "../components/Modal/Backdrop";
import MovieRowElement from "../components/Row/MovieRowElement";

function MyList() {
  const { moviesList, clearList } = useMyList();
  const { handleRowMovieClick, selectedMovie } = useSelectedMovie();
  const { modal, closeModal } = useModal();

  return (
    <>
      <Navbar />
      <div className="px-14 py-24">
        <div className="mb-8 flex  items-end gap-7">
          <h1 className="text-2xl font-bold sm:text-3xl lg:text-5xl 2xl:text-6xl">
            My List
          </h1>
          {moviesList.length > 0 && (
            <button className="font-bold opacity-40" onClick={clearList}>
              Clear list
            </button>
          )}
        </div>
        <ul className="flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:items-center  sm:gap-y-12 sm:gap-x-5">
          {moviesList.map((movie) => (
            <MovieRowElement
              movie={movie}
              id={movie.id}
              handleClick={handleRowMovieClick}
              movies={moviesList}
            />
          ))}
        </ul>

        {moviesList.length === 0 && (
          <p className="font-bold opacity-40">Your list is empty</p>
        )}

        {modal && (
          <>
            <Modal movie={selectedMovie} />
            <Backdrop handleClick={closeModal} />
          </>
        )}
      </div>
    </>
  );
}

export default MyList;
