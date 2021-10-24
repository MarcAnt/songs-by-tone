import React from "react";
import { HashRouter } from "react-router-dom";
import { Footer } from "@components/Footer/Footer";
import { Header } from "@components/Header/Header";

// import { GlobalStyles } from "./GlobalStyles";
import Home from "@pages/Home";

const App: React.FC = () => {
  return (
    <>
      {/* <GlobalStyles /> */}
      <HashRouter>
        <div className="site-wrapper">
          <Header />
          <Home />
          <Footer />
        </div>
      </HashRouter>
    </>
  );
};

export default App;
