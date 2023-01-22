import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import { BsSearch } from "react-icons/bs";
import { MdNotificationsNone, MdArrowDropDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pages from "./Pages";

export type NavPage = {
  id: number;
  title: string;
  link: string;
};

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [navPages, setNavPages] = useState<Array<NavPage>>([
    {
      id: 0,
      title: "Main page",
      link: "/",
    },
    {
      id: 1,
      title: "My List",
      link: "/list",
    },
    {
      id: 2,
      title: "Lorem",
      link: "/",
    },
    {
      id: 3,
      title: "Lorem",
      link: "/",
    },
    {
      id: 4,
      title: "Lorem",
      link: "/",
    },
    {
      id: 5,
      title: "Lorem",
      link: "/",
    },
  ]);

  function updateScrolledNavbar() {
    const windowHeight = window.scrollY;
    windowHeight > 0 ? setIsScrolled(true) : setIsScrolled(false);
  }

  function openDropdown() {
    setIsOpen(true);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", updateScrolledNavbar);

    return () => {
      window.removeEventListener("scroll", updateScrolledNavbar);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 flex w-full justify-between py-6 px-5 sm:px-14 ${
        isScrolled && "bg-navGradient"
      }  transition-all duration-300`}
    >
      <div className="relative flex items-center gap-4 sm:gap-5 lg:gap-10 ">
        <Link to="/" className="cursor-pointer">
          <img className="max-h-4 sm:max-h-6" src={logo} alt="logo" />
        </Link>
        <ul className="hidden items-center gap-5 text-sm lg:flex">
          <Pages pages={navPages} />
        </ul>

        <div className="lg:hidden">
          <div className="flex items-center">
            <span
              className="cursor-pointer text-sm font-bold sm:text-base"
              onClick={isOpen ? closeDropdown : openDropdown}
            >
              Browse
            </span>
            <MdArrowDropDown
              size={30}
              onClick={isOpen ? closeDropdown : openDropdown}
              className="cursor-pointer"
            />
          </div>

          {isOpen && (
            <ul className="absolute top-[calc(100%+2rem)] left-0 right-0 rounded-md bg-navGradient p-3">
              <Pages pages={navPages} />
            </ul>
          )}
        </div>
      </div>
      <ul className="flex items-center gap-4">
        <li className="hidden sm:block">
          <BsSearch className="cursor-pointer fill-white" size={20} />
        </li>
        <li className="hidden sm:block">
          <span>Lorem Ipsum</span>
        </li>
        <li>
          <MdNotificationsNone
            className="cursor-pointer fill-white"
            size={25}
          />
        </li>
        <li>
          <img
            className="max-h-8 cursor-pointer rounded-sm"
            src={avatar}
            alt="avatar"
          />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
