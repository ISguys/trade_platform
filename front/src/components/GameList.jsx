/* eslint-disable quotes */
/* eslint-disable arrow-parens */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Game1 from '../components/Game1';
import backendurl from '../config';
import spinner from '../shared/LoadingSpinner.js';

const GameList = () => {

    //const [ loading, setloading ] = useState(false);
    //const [ error, setError ] = useState(false);
    const [loading, setloading] = useState(false);
    const [games, setGames] = useState(null);
    const [searchgames, setSearchGames] = useState("");

    const updateStateValue = () => {
        console.log(searchgames);
        //setloading(true);
        axios.post(`${backendurl}/game/search`, { gameName: searchgames }).then((res) => {
            console.log(res);
            setGames(res.data);
            setloading(false);
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setloading(false);
        });
    };

    useEffect(() => {
        setloading(true);
        axios.get(`${backendurl}/game`).then((res) => {
            console.log(res);
            setGames(res.data);
            setloading(false);
        }).catch(err => {
            console.log(err);
            setloading(false);
        }).finally(() => {
            setloading(false);
        });
    }, []);

    return (

        <>
            {loading && <spinner />}
            <div id="site_title_bar_wrapper1">
                <div id="navbar2">
                    <div id="menu2">
                        <div id="search">
                        </div>
                        <div id="search1">
                            <input type="search" name="q" placeholder="Поиск по сайту" value={null}
                                id="searchblank"
                                onChange={(event) => { setSearchGames(event.target.value); }}
                            />
                            <input type="submit" value="Найти" id="searchblank"
                                onClick={updateStateValue()}/>
                        </div>
                        <div id="sort">
                            {' '}
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
            <div id="cards">
                {games &&
          games.map((game) => (
              // eslint-disable-next-line react/jsx-key
              <Link to="/Game1">
                  <div id="card1">
                      {" "}
                      <div id="card1img"> <img
                          src={game.image_link}
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
