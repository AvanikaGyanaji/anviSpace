import { Link, useLocation } from "react-router-dom";
import { pagesLinksList } from "../Utils/PagesLinksList";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const currentPage = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCurrentPage = () => {
    currentPage.current = location.pathname;
  };

  getCurrentPage();

  const currentPageStyle = (link) =>
    currentPage.current === link ? "currentPageLink" : "";

  return (
    <header
      className={`w-full h-[80px] fixed top-0 z-10 mx-auto flex justify-between align-middle text-white px-2 md:px-8 place-items-center text-[16px] max-md:text-xs`}
      style={{
        background: scrolled
          ? "linear-gradient(180deg, #111 60%, transparent)"
          : "transparent",
      }}
    >
      <img
        src="/logos/anvi-space.png"
        alt="anvi-space logo"
        className="w-full max-w-[120px] max-md:max-w-[100px] object-cover text-sm"
      />
      <link rel="preload" as="image" href="/logos/anvi-space.png" />
      <nav className="flex justify-center align-middle">
        {/* Desktop Nav */}
        <ul className="nav-ul m-0 p-0 flex justify-center align-middle gap-4 md:gap-[24px]">
          {Object.keys(pagesLinksList)
            .splice(0, 5)
            .map((pageKey) => (
              <li
                key={pagesLinksList[pageKey]}
                className={`w-auto ${currentPageStyle(
                  pagesLinksList[pageKey]
                )}`}
              >
                {/* For Link Pages */}
                {/* <Link to={pagesLinksList[pageKey]} className="text-md">
                  {pageKey}
                </Link> */}
                <a href={pagesLinksList[pageKey]} target="">{pageKey}</a>
              </li>
            ))}
        </ul>
      </nav>
      {/* <Link
        to={pagesLinksList["Contact Us"]}
        className={`${currentPageStyle(pagesLinksList[5])}`}
      >
        {Object.keys(pagesLinksList)[5]}
      </Link> */}
      
      <a
        href={pagesLinksList["Contact Us"]}
        target=""
        className={`${currentPageStyle(pagesLinksList[5])}`}
      >
        {Object.keys(pagesLinksList)[5]}
      </a>
    </header>
  );
};

export default Header;
