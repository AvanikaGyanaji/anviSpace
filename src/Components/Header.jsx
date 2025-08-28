import { Link, useLocation } from "react-router-dom";
import { pagesLinksList } from "../Utils/PagesLinksList";
import { useEffect, useRef, useState } from "react";
import { Menu, Plus } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPage = useRef(null);

  const updateMobileMenuOpen = () => {
    setMobileMenuOpen((prev) => !prev);
  };

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
        loading="eager"
        className="w-full max-w-[120px] max-md:max-w-[100px] object-cover text-sm"
      />
      <link rel="preload" as="image" href="/logos/anvi-space.png" />
      <nav className="flex justify-center align-middle">
        {/* Desktop Nav */}
        <ul className="nav-ul flex max-md:hidden m-0 p-0 justify-center align-middle gap-4 md:gap-[24px]">
          {Object.keys(pagesLinksList)
            .splice(0, 5)
            .map((pageKey) => (
              <li
                key={pagesLinksList[pageKey]}
                className={`w-auto ${currentPageStyle(
                  pagesLinksList[pageKey]
                )}`}
              >
                <a
                  href={pagesLinksList[pageKey]}
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = pagesLinksList[pageKey].replace("#", "");
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {pageKey}
                </a>
              </li>
            ))}
        </ul>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="max-md:flex hidden w-screen h-screen overflow-y-auto bg-black absolute top-0 left-0">
            <button
              className="menu-close-btn absolute top-7 right-7 cursor-pointer border-1 border-gray-100 active:rotate-360 active:scale-75 active:opacity-10 transition-all duration-150"
              onClick={updateMobileMenuOpen}
            >
              <Plus color="white" size={30} className="rotate-45 w-min h-min" />
            </button>
            <ul className="nav-ul max-w-[600px] m-auto flex flex-col text-center text-2xl p-0 justify-center align-middle gap-6 md:gap-[10vh]">
              {Object.keys(pagesLinksList)
                // .splice(0, 5)
                .map((pageKey) => (
                  <li
                    key={pagesLinksList[pageKey]}
                    className={`w-auto ${currentPageStyle(
                      pagesLinksList[pageKey]
                    )}`}
                  >
                    <a
                      href={pagesLinksList[pageKey]}
                      onClick={(e) => {
                        e.preventDefault();
                        const targetId = pagesLinksList[pageKey].replace(
                          "#",
                          ""
                        );
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                          targetElement.scrollIntoView({ behavior: "smooth" });
                        }
                        setMobileMenuOpen(false); // ✅ close menu after navigating
                      }}
                    >
                      {pageKey}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Contact Us Link */}
      <a
        href={pagesLinksList["Contact Us"]}
        target=""
        className={`${currentPageStyle(pagesLinksList[5])} max-md:hidden`}
        onClick={(e) => {
          e.preventDefault();
          const targetId = pagesLinksList["Contact Us"].replace("#", "");
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        {Object.keys(pagesLinksList)[5]}
      </a>

      {/* Mobile Menu Button */}
      <button
        className="hidden max-md:block mr-4 cursor-pointer active:rotate-360 active:opacity-0 transition-all duration-150"
        onClick={updateMobileMenuOpen}
      >
        <Menu size={30} color="white" />
      </button>
    </header>
  );
};

export default Header;
