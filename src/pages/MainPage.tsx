import Navbar from "../components/Navbar";
import Row from "../components/Row/Row";
import Main from "../components/Main/Main";
import requests from "../requests";
import Footer from "../components/Footer";

function MainPage() {
  return (
    <>
      <Navbar />
      <Main fetchUrl={requests.fetchTopRated} />
      <div className="px-14 flex flex-col items-start gap-14">
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Popular Now" fetchUrl={requests.fetchPopular} />
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
