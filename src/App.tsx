import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SongForm from "./components/SongForm";
import SongSearch from "./components/SongSearch";
import { createData } from "./helpers/Api";
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <SongForm createData={createData} />
      <SongSearch />
      <Footer />
    </div>
  );
};

export default App;
