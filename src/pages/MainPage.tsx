import Navbar from "../components/Navbar/Navbar";
import Row from "../components/Row/Row";
import Main from "../components/Main/Main";
import requests from "../requests";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Modal/Backdrop";
import { useModal } from "../context/ModalContext";
import { useSelectedMovie } from "../context/SelectedMovieContext";

function MainPage() {
  const { modal, closeModal } = useModal();
  const { selectedMovie } = useSelectedMovie();

  return (
    <>
      <Navbar />
      <Main fetchUrl={requests.fetchTopRated} />
      <div className="flex flex-col items-start gap-14 px-6 sm:px-14">
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Popular Now" fetchUrl={requests.fetchPopular} />
      </div>
      {modal && (
        <>
          <Modal movie={selectedMovie} />
          <Backdrop handleClick={closeModal} />
        </>
      )}
      {/* <Footer /> */}
    </>
  );
}

export default MainPage;
