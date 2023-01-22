import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Movie } from "../App";

type MyListContextProviderType = {
  children: ReactNode;
};

type MyListContextType = {
  moviesList: Array<Movie>;
  addToList: (movie: Movie) => void;
  removeFromList: (movie: Movie) => void;
  checkIfInList: (movie: Movie) => boolean;
  clearList: () => void;
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

  function checkIfInList(movie: Movie) {
    return (
      moviesList.filter((listMovie) => listMovie.id === movie.id).length > 0
    );
  }

  function clearList() {
    setMoviesList([]);
  }

  return (
    <MyListContext.Provider
      value={{
        moviesList,
        addToList,
        removeFromList,
        checkIfInList,
        clearList,
      }}
    >
      {children}
    </MyListContext.Provider>
  );
}
