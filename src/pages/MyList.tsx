import Navbar from "../components/Navbar/Navbar";
import { useMyList } from "../context/MyListContext";

function MyList() {
  const { moviesList } = useMyList();

  return (
    <>
      <Navbar />
      <div className="px-14">
        <h1 className="font-bold text-6xl">My List</h1>
        <div className="grid grid-cols-4 gap-4">
          {moviesList.map((movie) => (
            <img
              className="rounded-xl max-h-56 block"
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt="movie img"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MyList;
