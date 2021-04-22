import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Game1 from "../components/Game1";

const GameList = () => {
  //const [ loading, setloading ] = useState(false);
  //const [ error, setError ] = useState(false);
  const [games, setGames] = useState(null);

  useEffect(() => {
    //setloading(true);
    axios.get("http://localhost:3001/game").then((res) => {
        console.log(res);
      setGames(res.data);
      //setError(false);
      //setloading(false);
    }).catch(err=>{
        console.log(err);
    })
    /*.catch(err => {
              setError(true);
              setloading(false);
          });*/
  }, []);

  return (
    <>
      <div id="cards">
        {games &&
          games.map((game) => (
              // eslint-disable-next-line react/jsx-key
            <Link to="/Game1">
              <div id="card1">
                {" "}
                <div id="card1img"> <img
                                        src={game.image}
                                        alt={game.title}
                                    /> </div>
                <div id="card1txt">{game.name}</div>
              </div>
            </Link>
          ))}
      </div>

      <Router>
        <Switch>
          <Route exact path="/Game1" component={Game1} />
        </Switch>
      </Router>
    </>
  );
};

export default GameList;
