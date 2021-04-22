import React from "react";

const Navbar = () => {
  return (
    <div id="site_title_bar_wrapper1">
      <div id="navbar2">
        <div id="menu2">
          <div id="slider"></div>
          <div id="search"></div>
          <div id="sort">
            {" "}
            <div id="sort1">
              Сортировка:
              <a className="arrow arrow-up" href="#">
                по возрастанию
              </a>
              <a className="arrow arrow-down" href="#">
                по убыванию
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
