import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { pagesLinksList } from "./Utils/PagesLinksList";

import IntroWebEffect from "./Components/IntroWebEffect";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <IntroWebEffect />
      <Header />
      <main className="w-screen min-h-screen overflow-x-hidden relative bg-[#030406]">
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path="/pillars" element={<Pillars />} />  */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
