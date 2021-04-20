import React from "react";
import "./App.css";

import sitelogo from "./assets/logo.png";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PGSwitch from "./components/PGSwitch";
import Sidebar from "./components/Sidebar";
import GameList from "./components/GameList";


console.log(sitelogo);

function App() {
  return (
    <>
     <Header />
     <Navbar />
     <Sidebar />
     <GameList />
     <PGSwitch />
     <Footer />
    </>
  );
}

export default App;
