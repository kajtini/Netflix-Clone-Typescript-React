import { createContext, useContext, useState, ReactNode } from "react";
import { Movie } from "../App";

type SelectedMovieProviderProps = {
  children: ReactNode;
};

const SelectedMovieContext = createContext<Movie | null>(null);
const SelectedMovieUpdateContext = createContext<React.Dispatch<
  React.SetStateAction<Movie | null>
> | null>(null);

export function useSelectedMovie() {
  return useContext(SelectedMovieContext);
}

export function useSelectedMovieUpdate() {
  return useContext(SelectedMovieUpdateContext);
}

export function SelectedMovieProvider({
  children,
}: SelectedMovieProviderProps) {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <SelectedMovieContext.Provider value={selectedMovie}>
      <SelectedMovieUpdateContext.Provider value={setSelectedMovie}>
        {children}
      </SelectedMovieUpdateContext.Provider>
    </SelectedMovieContext.Provider>
  );
}
