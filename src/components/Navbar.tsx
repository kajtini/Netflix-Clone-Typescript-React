import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { BsSearch } from "react-icons/bs";
import { MdNotificationsNone, MdArrowDropDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type NavPage = {
  id: number;
  title: string;
  isActive: boolean;
  link: string;
};

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navPages, setNavPages] = useState<Array<NavPage>>([
    {
      id: 0,
      title: "Main page",
      isActive: true,
      link: "/",
    },
    {
      id: 1,
      title: "My List",
      link: "/list",
      isActive: false,
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      isActive: false,
      link: "/",
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      isActive: false,
      link: "/",
    },
    {
      id: 4,
      title: "Lorem Ipsum",
      isActive: false,
      link: "/",
    },
    {
      id: 5,
      title: "Lorem Ipsum",
      isActive: false,
      link: "/",
    },
  ]);

  function handlePageClick(id: number) {
    setNavPages((prevNavPages) =>
      prevNavPages.map((page) => {
        return page.id === id
          ? { ...page, isActive: true }
          : { ...page, isActive: false };
      })
    );
  }

  function updateScrolledNavbar() {
    const windowHeight = window.scrollY;
    windowHeight > 0 ? setIsScrolled(true) : setIsScrolled(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", updateScrolledNavbar);

    return () => {
      window.removeEventListener("scroll", updateScrolledNavbar);
    };
  }, []);

  return (
    // Fix contrast on navbar transparent
    <div
      className={`py-6 px-14 flex justify-between fixed top-0 z-50 w-full ${
        isScrolled && "bg-navGradient"
      }  transition-all duration-300`}
    >
      <div className="flex items-center gap-10">
        <Link to="/" className="cursor-pointer">
          <img className="max-h-6" src={logo} alt="logo" />
        </Link>
        <ul className="flex items-center gap-5 text-sm">
          {navPages.map((page) => (
            <li key={page.id} onClick={() => handlePageClick(page.id)}>
              <Link
                to={page.link}
                className={`${page.isActive && "font-bold"}`}
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex items-center gap-4">
        <li>
          <BsSearch className="fill-white" size={20} />
        </li>
        <li>
          <span>Lorem Ipsum</span>
        </li>
        <li>
          <MdNotificationsNone className="fill-white" size={25} />
        </li>
        <li className="flex items-center gap-1">
          <img className="max-h-8 rounded-sm" src={avatar} alt="avatar" />
          <MdArrowDropDown className="fill-white" size={25} />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
