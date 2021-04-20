import React from "react";
import sitelogo from "./../assets/logo.png";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Warranty from '../components/Warranty';

const Header = () => {
  return (
    <>
    <div id="site_title_bar_wrapper">
      <div id="site_title_bar">
        <div id="menu">
          <a href="/">
            <div id="general">
              <div id="general1">Главная</div>
            </div>
          </a>
          <a href="/Warranty">
            {" "}
            <div id="warranty">
              <div id="warranty1">Гарантии</div>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=DLzxrzFCyOs&ab_channel=AllKindsOfStuff">
            {" "}
            <div id="review"><div id="review1">Отзывы</div></div>
          </a>
          <a href="https://www.youtube.com/watch?v=DLzxrzFCyOs&ab_channel=AllKindsOfStuff">
            {" "}
            <div id="help">
              <div id="help1">Помощь</div>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=DLzxrzFCyOs&ab_channel=AllKindsOfStuff">
            {" "}
            <div id="steamlogin"></div>
          </a>

          <div id="site_title">
            <div>
              <a href="https://www.youtube.com/watch?v=DLzxrzFCyOs&ab_channel=AllKindsOfStuff">
                <img src={sitelogo} alt="logo" className="logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
<Router>
<Switch>
<Route exact path="/Warranty" component={Warranty} />
</Switch>
</Router>
</>
  );
};

export default Header;