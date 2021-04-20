import React from "react";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Game1 from '../components/Game1';

const GameList = () => {
  return (
    <>
    <div id="cards">
    <div id="card1" href="/game1">

        {" "}
        <div id="card1img"></div>
        <div id="card1txt">Cyberpunk 2077</div>
    </div>
    <div id="card2">
      <a href="https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/?l=russian">
        {" "}
        <div id="card2img"></div>
        <div id="card2txt">Grand Theft Auto</div>
      </a>
    </div>
    <div id="card3">
      <a href="https://store.steampowered.com/app/292030/_3/?l=russian">
        {" "}
        <div id="card3img"></div>
        <div id="card3txt">Witcher 3</div>
      </a>
    </div>
    <div id="card4">
      <a href="https://store.steampowered.com/agecheck/app/1091500/">
        {" "}
        <div id="card4img"></div>
        <div id="card4txt">Cyberpunk 2077</div>
      </a>
    </div>
    <div id="card5">
      <a href="https://store.steampowered.com/agecheck/app/1091500/">
        {" "}
        <div id="card5img"></div>
        <div id="card5txt">Grand Theft Auto</div>
      </a>
    </div>
    <div id="card6">
      <a href="https://store.steampowered.com/agecheck/app/1091500/">
        {" "}
        <div id="card6img"></div>
        <div id="card6txt">Grand Theft Auto</div>
      </a>
    </div>
    <div id="card7">
      <a href="https://store.steampowered.com/agecheck/app/1091500/">
        {" "}
        <div id="card7img"></div>
        <div id="card7txt">Grand Theft Auto</div>
      </a>
    </div>
    <div id="card8">
      <a href="https://store.steampowered.com/agecheck/app/1091500/">
        {" "}
        <div id="card8img"></div>
        <div id="card8txt">Grand Theft Auto</div>
      </a>
    </div>
    <div id="card9">
      <a href="https://store.steampowered.com/agecheck/app/1091500/">
        {" "}
        <div id="card9img"></div>
        <div id="card9txt">Grand Theft Auto</div>
      </a>
    </div>
    <div id="card10">
      <a href="https://store.steampowered.com/agecheck/app/1091500/">
        {" "}
        <div id="card10img"></div>
        <div id="card10txt">Grand Theft Auto</div>
      </a>
    </div>
    <div id="card11">
      <a href="https://store.steampowered.com/agecheck/app/1091500/">
        {" "}
        <div id="card11img"></div>
        <div id="card11txt">Grand Theft Auto</div>
      </a>
    </div>
    <div id="card12">
      <a href="https://store.steampowered.com/agecheck/app/1091500/">
        {" "}
        <div id="card12img"></div>
        <div id="card12txt">Grand Theft Auto</div>
      </a>
    </div>
    <div id="card13">
      <a href="https://store.steampowered.com/agecheck/app/1091500/">
        {" "}
        <div id="card13img"></div>
        <div id="card13txt">Grand Theft Auto</div>
      </a>
    </div>
    <div id="card14">
      <a href="https://store.steampowered.com/agecheck/app/1091500/">
        {" "}
        <div id="card14img"></div>
        <div id="card14txt">Grand Theft Auto</div>
      </a>
    </div>
    <div id="card15">
      <a href="https://store.steampowered.com/agecheck/app/1091500/">
        {" "}
        <div id="card15img"></div>
        <div id="card15txt">Grand Theft Auto</div>
      </a>
    </div>
  </div>
 
  <Router>
 <Switch>
<Route exact path="/game1" component={Game1} />
 </Switch>
 </Router>

  </>
  );
};

export default GameList;
