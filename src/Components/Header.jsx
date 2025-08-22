import { Link, useLocation } from "react-router-dom";
import { pagesLinksList } from "../Utils/PagesLinksList";
import { useRef } from "react";

const Header = () => {
  const location = useLocation();
  const currentPage = useRef(null);

  const getCurrentPage = () => {
    currentPage.current = location.pathname;
  };

  getCurrentPage();

  //   useEffect(() => {
  //     getCurrentPage();
  //   }, [location])

  const currentPageStyle = (link) => currentPage.current === link ? 'currentPageLink' : ''

  return (
    <header className="w-full h-[80px] fixed top-0 z-10 bg-transparent mx-auto flex justify-between align-middle text-white px-8 place-items-center text-[16px] max-md:text-xs">
      <img
        src="/logos/anvi-space.png"
        alt="anvi-space logo"
        className="w-full max-w-[120px] max-md:max-w-[100px] object-cover text-sm"
      />
      <link rel="preload" as="image" href="/logos/anvi-space.png" />
      <nav className="flex justify-center align-middle">
        {/* Desktop Nav */}
        <ul className="nav-ul m-0 p-0 flex justify-center align-middle gap-[24px]">
          {Object.keys(pagesLinksList)
            .splice(0, 5)
            .map((pageKey) => (
                <li
                  key={pagesLinksList[pageKey]}
                  className={`w-auto ${currentPageStyle(pagesLinksList[pageKey])}`}
                >
                  <Link to={pagesLinksList[pageKey]} className="text-md">
                    {pageKey}
                  </Link>
                </li>
              ))
            }
        </ul>
      </nav>
      <Link to={pagesLinksList["Contact Us"]} className={`${currentPageStyle(pagesLinksList[5])}`}>
        {Object.keys(pagesLinksList)[5]}
      </Link>
    </header>
  );
};

export default Header;
