import { useEffect, useState, useRef } from "react";
import { Movie } from "../../App";
import MovieRowElement from "./MovieRowElement";
import axios from "../../axios";
import SliderBtn from "../Buttons/SliderBtn";
import { useSelectedMovie } from "../../context/SelectedMovieContext";

type RowProps = {
  title: string;
  fetchUrl: string;
};

// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

function Row({ title, fetchUrl }: RowProps) {
  const [movies, setMovies] = useState<Array<Movie> | null>(null);
  const { handleRowMovieClick } = useSelectedMovie();

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

  return (
    <div>
      {movies && (
        <div>
          <h2 className="mb-5 text-2xl font-bold sm:text-3xl 2xl:text-4xl">
            {title}
          </h2>
          <div className="relative">
            <ul
              ref={listRef}
              className="relative flex items-center gap-4 overflow-scroll scroll-smooth scrollbar-hide"
            >
              {movies.map((movie) => {
                return (
                  <MovieRowElement
                    key={movie.id}
                    id={movie.id}
                    movies={movies}
                    movie={movie}
                    handleClick={handleRowMovieClick}
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
