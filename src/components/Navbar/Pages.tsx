import { Link } from "react-router-dom";
import { NavPage } from "./Navbar";

type PagesProps = {
  pages: Array<NavPage>;
};

function Pages({ pages }: PagesProps) {
  return (
    <>
      {pages.map((page, i) => (
        <li key={page.id}>
          <Link to={page.link} className={` sm:leading-0 leading-9`}>
            {page.title}
          </Link>

          {i !== pages.length - 1 && (
            <hr className="my-2 opacity-5 lg:hidden" />
          )}
        </li>
      ))}
    </>
  );
}

export default Pages;
