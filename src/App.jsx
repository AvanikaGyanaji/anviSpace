import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useEffect } from "react";
import { pagesLinksList } from "./Utils/PagesLinksList";

import IntroWebEffect from "./Components/IntroWebEffect";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Careers from "./Pages/Careers";
import Missions from "./Pages/Missions";
import NotFound from "./Pages/NotFound";

const App = () => {
  useEffect(() => {
    const mainEl = document.querySelector("main");
    if (mainEl) {
      // lock scroll immediately
      document.body.style.overflowY = "hidden";

      // restore scroll after 6s
      const timer = setTimeout(() => {
        document.body.style.overflowY = "auto";
      }, 6000);

      // cleanup on unmount
      return () => clearTimeout(timer);
    }
  }, []);

useEffect(() => {
  const navigationEntries = performance.getEntriesByType("navigation");
  if (navigationEntries.length > 0 && navigationEntries[0].type === "reload") {
    window.location.href = "/";
  }
}, []);

  return (
    <BrowserRouter>
      <IntroWebEffect />
      <Header />
      <main className="w-screen min-h-screen overflow-hidden relative bg-[#030406]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={pagesLinksList.Careers} element={<Careers />} />
          <Route path="/missions" element={<Missions />} />
          {/* <Route path="/pillars" element={<Pillars />} /> */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
