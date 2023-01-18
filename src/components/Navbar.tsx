import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { BsSearch } from "react-icons/bs";
import { MdNotificationsNone, MdArrowDropDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type NavPage = {
  id: number;
  title: string;
  isActive: boolean;
};

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navPages, setNavPages] = useState<Array<NavPage>>([
    {
      id: 0,
      title: "Main page",
      isActive: true,
    },
    {
      id: 1,
      title: "Lorem Ipsum",
      isActive: false,
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      isActive: false,
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      isActive: false,
    },
    {
      id: 4,
      title: "Lorem Ipsum",
      isActive: false,
    },
    {
      id: 5,
      title: "Lorem Ipsum",
      isActive: false,
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
        <a className="cursor-pointer" href="#">
          <img className="max-h-6" src={logo} alt="logo" />
        </a>
        <ul className="flex items-center gap-5 text-sm">
          {navPages.map((page) => (
            <li key={page.id} onClick={() => handlePageClick(page.id)}>
              <a className={`${page.isActive && "font-bold"}`} href="#">
                {page.title}
              </a>
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
