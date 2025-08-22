import { BrowserRouter, Route, Routes } from "react-router-dom";
import { pagesLinksList } from "./Utils/PagesLinksList";

import IntroWebEffect from "./Components/IntroWebEffect";

import Header from "./Components/Header";
import Home from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <IntroWebEffect />
      <Header />
      <main className="w-screen min-h-screen overflow-x-hidden relative">
        <Routes>
          <Route path={pagesLinksList.Home} element={<Home />} />
          {/* <Route path="/pillars" element={<Pillars />} />  */}
        </Routes>
      </main>
      {/* <Footer/> */}
    </BrowserRouter>
  );
};

export default App;
