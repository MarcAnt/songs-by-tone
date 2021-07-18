import React from "react";
import { GlobalStyles } from "./GlobalStyles";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Home from "./Pages/Home";

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
