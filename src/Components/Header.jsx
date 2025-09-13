import { Link, useLocation } from "react-router-dom";
import { pagesLinksList } from "../Utils/PagesLinksList";
import { useEffect, useState } from "react";
import { Menu, Plus } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const updateMobileMenuOpen = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.history.replaceState(
          null,
          "",
          location.pathname + window.location.search
        );
        targetElement.scrollIntoView({ behavior: "smooth" });
        // console.log(location.pathname+window.location.search);
        window.history.replaceState(
          null,
          "",
          location.pathname + window.location.search
        );
      }
    }
  }, [location]);

  const currentPageStyle = (link) => {
    const pathWithHash = location.pathname + location.hash;
    // console.log("pathWithHash:", pathWithHash, "checking link:", link);

    // ✅ Exact match (e.g., /careers)
    if (link === pathWithHash) {
      return "currentPageLink";
    }

    // ✅ Homepage sections (/#about, /#contact, etc.)
    if (
      location.pathname === "/" &&
      link.startsWith("/#") &&
      location.hash === "#" + link.split("#")[1]
    ) {
      return "currentPageLink";
    }

    // console.log(link, location.pathname, pagesLinksList);
    return "";
  };

  return (
    <header
      className={`w-full h-[80px] fixed top-0 z-10 mx-auto flex justify-between align-middle text-white px-2 md:px-3 lg:px-8 place-items-center text-[16px] max-md:text-xs transition-background duration-300`}
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
        <ul className="nav-ul flex max-md:hidden m-0 p-0 justify-center align-middle gap-4 md:gap-[12px] lg:gap-[24px]">
          {Object.keys(pagesLinksList)
            .splice(0, 5)
            .map((pageKey) => (
              <li
                key={pagesLinksList[pageKey]}
                className={`w-auto ${currentPageStyle(
                  pagesLinksList[pageKey]
                )}`}
              >
                <Link
                  to={pagesLinksList[pageKey]}
                  className={currentPageStyle(pagesLinksList[pageKey])}
                >
                  {pageKey}
                </Link>
              </li>
            ))}
        </ul>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="max-md:flex hidden w-[105%] h-screen overflow-y-auto bg-black absolute top-0 -left-5">
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
                    <Link
                      to={pagesLinksList[pageKey]}
                      className={currentPageStyle(pagesLinksList[pageKey])}
                      onClick={() => {
                        updateMobileMenuOpen?.();
                      }}
                    >
                      {pageKey}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </nav>

      <span className="flex justify-center items-center gap-5">
        {/* Careers (separate page) */}
        <Link
          to={pagesLinksList.Careers}
          className={`${currentPageStyle(
            pagesLinksList.Careers
          )} max-md:hidden`}
        >
          Careers
        </Link>

        {/* Contact Us (scroll on home) */}
        <Link
          to={pagesLinksList["Contact Us"]}
          className={`${currentPageStyle(
            pagesLinksList["Contact Us"]
          )} max-md:hidden`}
        >
          Contact Us
        </Link>
      </span>

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
