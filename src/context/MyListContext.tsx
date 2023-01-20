import { createContext, useContext, useState, ReactNode } from "react";
import { Movie } from "../App";

type MyListContextProviderType = {
  children: ReactNode;
};

type MyListContextType = {
  moviesList: Array<Movie>;
  addToList: (movie: Movie) => void;
  removeFromList: (movie: Movie) => void;
};

const MyListContext = createContext({} as MyListContextType);

export function useMyList() {
  return useContext(MyListContext);
}

export function MyListContextProvider({ children }: MyListContextProviderType) {
  const [moviesList, setMoviesList] = useState<Array<Movie>>([]);

  function addToList(movie: Movie) {
    setMoviesList((prevMoviesList) => [...prevMoviesList, movie]);
  }

  function removeFromList(movie: Movie) {
    setMoviesList((prevMoviesList) =>
      prevMoviesList.filter((listMovie) => listMovie.id !== movie.id)
    );
  }

  return (
    <MyListContext.Provider value={{ moviesList, addToList, removeFromList }}>
      {children}
    </MyListContext.Provider>
  );
}
