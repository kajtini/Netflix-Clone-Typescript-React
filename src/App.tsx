import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyList from "./pages/MyList";
import { SelectedMovieContextProvider } from "./context/SelectedMovieContext";
import { ModalContextProvider } from "./context/ModalContext";

export type Movie = {
  name: string;
  overview: string;
  backdrop_path: string;
  first_air_date: string;
  origin_country: Array<string>;
  original_name: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  title?: string;
  id: number;
};

function App() {
  return (
    <div className="font-primary min-h-screen bg-primary text-white">
      <SelectedMovieContextProvider>
        <ModalContextProvider>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/list" element={<MyList />} />
          </Routes>
        </ModalContextProvider>
      </SelectedMovieContextProvider>
    </div>
  );
}

export default App;
