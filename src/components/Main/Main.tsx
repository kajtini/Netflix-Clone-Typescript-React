import { useEffect, useState } from "react";
import { Movie } from "../../App";
import axios from "../../axios";
import MainMovie from "./MainMovie";

type MainPageProps = {
  fetchUrl: string;
};

// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

function Main({ fetchUrl }: MainPageProps) {
  const [movies, setMovies] = useState<Array<Movie> | null>(null);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

  // Fix re rendering when clicking on a movie

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

  useEffect(() => {
    movies &&
      setCurrentMovie(movies[Math.floor(Math.random() * movies?.length)]);
  }, [movies]);

  return (
    <div className="mb-10">
      {movies && (
        <div className="relative">
          <MainMovie currentMovie={currentMovie} />
        </div>
      )}
    </div>
  );
}

export default Main;
