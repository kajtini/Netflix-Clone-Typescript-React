import { createContext, useContext, useState, ReactNode } from "react";
import { Movie } from "../App";

type SelectedMovieContextType = {
  selectedMovie: Movie | null;
  setSelectedMovie: React.Dispatch<React.SetStateAction<Movie | null>>;
  handleMovieClick: (id: number, movies: Array<Movie>) => void;
};

type SelectedMovieContextProviderProps = {
  children: ReactNode;
};

const SelectedMovieContext = createContext({} as SelectedMovieContextType);

export function useSelectedMovie() {
  return useContext(SelectedMovieContext);
}

export function SelectedMovieContextProvider({
  children,
}: SelectedMovieContextProviderProps) {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  function handleMovieClick(id: number, movies: Array<Movie>) {
    const selected = movies.find((movie) => movie.id === id);

    if (selected) {
      setSelectedMovie(selected);
    }
  }

  return (
    <SelectedMovieContext.Provider
      value={{ selectedMovie, setSelectedMovie, handleMovieClick }}
    >
      {children}
    </SelectedMovieContext.Provider>
  );
}
