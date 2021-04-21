import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
//import Warranty from "./components/Warranty";

import sitelogo from "./assets/logo.png";
import Header from "./components/Header";
console.log(sitelogo);

function App() {
  return (
    <>
      <BrowserRouter>
        <Route
          render={() => {
            return <Header />;
          }}
        ></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
