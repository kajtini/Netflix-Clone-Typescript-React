import { createContext, useContext, useState, ReactNode } from "react";
import { Movie } from "../App";

type SelectedMovieContextType = {
  selectedMovie: Movie | null;
  setSelectedMovie: React.Dispatch<React.SetStateAction<Movie | null>>;
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

  return (
    <SelectedMovieContext.Provider value={{ selectedMovie, setSelectedMovie }}>
      {children}
    </SelectedMovieContext.Provider>
  );
}
