import { useEffect, useState, useRef } from "react";
import { Movie } from "../../App";
import MovieRowElement from "./MovieRowElement";
import axios from "../../axios";
import Modal from "../Modal/Modal";
import Backdrop from "../Modal/Backdrop";
import SliderBtn from "../Buttons/SliderBtn";
import { useSelectedMovie } from "../../context/SelectedMovieContext";
import { useModal } from "../../context/ModalContext";

type RowProps = {
  title: string;
  fetchUrl: string;
};

// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

function Row({ title, fetchUrl }: RowProps) {
  const [movies, setMovies] = useState<Array<Movie> | null>(null);
  const { modal, openModal, closeModal } = useModal();
  const { selectedMovie, handleMovieClick } = useSelectedMovie();

  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(fetchUrl);
        const data = response.data.results;

        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [fetchUrl]);

  function handleRightArrowClick() {
    if (listRef.current) {
      listRef.current.scrollLeft += listRef.current.clientWidth;
    }
  }

  function handleLeftArrowClick() {
    if (listRef.current) {
      listRef.current.scrollLeft += -listRef.current.clientWidth;
    }
  }

  console.log(selectedMovie);

  return (
    <div>
      {movies && (
        <div>
          <h2 className="text-3xl font-bold mb-5 2xl:text-4xl">{title}</h2>
          <div className="relative">
            <ul
              ref={listRef}
              className="flex gap-4 overflow-scroll scroll-smooth scrollbar-hide relative items-center"
            >
              {movies.map((movie) => {
                return (
                  <MovieRowElement
                    key={movie.id}
                    id={movie.id}
                    movies={movies}
                    movie={movie}
                    handleClick={handleMovieClick}
                  />
                );
              })}
            </ul>
            <SliderBtn
              direction="right"
              handleRightClick={handleRightArrowClick}
              handleLeftClick={handleLeftArrowClick}
            />
            <SliderBtn
              direction="left"
              handleRightClick={handleRightArrowClick}
              handleLeftClick={handleLeftArrowClick}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Row;
