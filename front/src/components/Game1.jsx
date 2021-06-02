/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import backendurl from '../config';
import Spinner from '../shared/LoadingSpinner.js';


const Game1 = () => {
    const { gameId } = useParams();
    console.log({ gameId });
    const [loading, setloading] = useState(false);
    const [game, setGame] = useState(null);
    const [offers, setOffers] = useState([]);
    console.log(backendurl + '/game/' + gameId);
    useEffect(() => {
        setloading(true);
        console.log(backendurl + '/game/' + gameId);
        axios.get(backendurl + '/game/' + gameId)
            .then((res) => {
                console.log('getting game', res);
                setGame(res.data[0]);
                
                setloading(false);
            })
            .catch(err => {
                console.log(err);
                setloading(false);
            })
            .finally(() => {
                setloading(false);
            });
        axios.get(backendurl + '/offer/byGame/' + gameId)
            .then((res) => {
                console.log('offers: ', res.data);
                setOffers(res.data);
                setloading(false);
            })
            .catch(err => {
                console.log(err);
                setloading(false);
            }).finally(() => {
            setloading(false);
        });
    }, []);
    return (<>
            {loading && <Spinner/>}
            {!loading &&
                <>
            <div id="gamepage">
                {console.log({offers})}
                <div id="frame2">
                    <div id="gamecard">
                        <img src={game?.imagelink}
                          alt={game?.title} />
                          </div>
                    <div id="gameprice">Цена в STEAM: {game?.steamprice} <h>$</h></div>
                    <div id="buybutton"></div>
                </div>

                <div id="gamename">{game?.title}</div>
                <div id="Alloffers"> Другие {game?.title} на торговой площадке </div><p />
                <div id="alluseroffers">
                {offers &&
          offers.map((offer) => (

                  <div id="offercard">
                      <div id="alluseroffers1">
                          <img
                          src={game?.imagelink}
                          alt={game?.title}
                      />
                      </div>
                     Никнейм: {offer?.steam_name}<p/>
                     Цена:  {offer?.price} $ <p/>
                     <button className='myButton1'></button>
                  </div>


          ))}
                    
                    </div>
                <div id="lookinsteam"></div>
                <div id="description"> {game?.description}
                </div>
                <div id="microchel1"></div>
                <div id="microchel2"></div>
                <div id="kasa"></div>
                <div type="text/javascript" id="hde-kb-widget" data-host="hatterkeys.helpdeskeddy.com" data-lang="ru"></div>
            </div>

            <Footer/>

                </>
            }
        </>
    )
};

export default Game1;
