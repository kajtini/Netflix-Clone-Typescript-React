import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage/MainPage";
import Row from "./components/Row/Row";
import requests from "./requests";
import Footer from "./components/Footer";

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
      <Navbar />
      <MainPage fetchUrl={requests.fetchTopRated} />
      <div className="px-14 flex flex-col items-start gap-14">
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Popular Now" fetchUrl={requests.fetchPopular} />
      </div>
      {/* Movie Component */}
      {/* Modal Component */}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
