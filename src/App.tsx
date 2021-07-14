import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SongDetails from "./components/SongDetails";
import SongForm from "./components/SongForm";

import SongHome from "./components/SongHome";
import SongSearch from "./components/SongSearch";
const App: React.FC = () => {
  return (
    <div>
      <Header />
      {/* <SongHome /> */}
      {/* <SongForm /> */}
      {/* <SongDetails /> */}
      <SongSearch />
      <Footer />
    </div>
  );
};

export default App;
