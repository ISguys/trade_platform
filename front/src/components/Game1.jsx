/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import backendurl from '../config';
import Spinner from '../shared/LoadingSpinner.js';


const UserOffers = () => {
   
    
}

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
                        <img src={game?.image_link}
                          alt={game?.title} />
                          </div>
                    <div id="gameprice">{game?.steam_price} <h>$</h></div>
                    <div id="buybutton"></div>
                </div>

                <div id="gamename">{game?.title}</div>
                <div id="Alloffers"> Все предложения на маркете</div>
                <div id="alluseroffers">
                {offers &&
          offers.map((offer) => (

                  <div id="offercard">
                      <div id="alluseroffers1">
                          <img
                          src={game?.image_link}
                          alt={game?.title}
                      />
                      </div>
                     Никнейм: {offer?.creator_id}<p/>
                     Цена:  {offer?.price} $
                  </div>


          ))}
                    
                    </div>
                <div id="lookinsteam"></div>
                <div id="description"> {game?.description}
                </div>
                <div type="text/javascript" id="hde-kb-widget" data-host="hatterkeys.helpdeskeddy.com" data-lang="ru"></div>

            </div>

            <Footer/>

                </>
            }
        </>
    )
};

export default Game1;
