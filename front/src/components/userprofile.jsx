import React, {useContext, useEffect, useState} from 'react';
import Footer from '../components/Footer';
import { AuthContext } from '../context/auth-context';
import axios from 'axios';
import { Link } from 'react-router-dom';
import backendurl from '../config';
import Spinner from '../shared/LoadingSpinner.js';
import GameList from './GameList';

const UserProfile = () => {
    const { logout } = useContext(AuthContext);
    const storage = localStorage.getItem('userData');
    if(!storage) return (<Link to="/" exact component={GameList}> </Link>);
    const { token, userId} = JSON.parse(storage);
    const [user, setUser] = useState(null);
    const [offers, setOffers] = useState(null);
    const [loading, setloading] = useState(false);
    const [tradeLink, setTradeLink] = useState("");

    const Logout = () => {};

    const deleteOffer = (offerId) => {

            axios.delete(backendurl + '/offer/' + offerId, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((res) => {
                    console.log('getting deleteing offer', res);
                    window.location.reload()
                })
                .catch(err => {
                    console.log(err);

                })
                .finally(() => {
                    setloading(false);
                });
    }

    const changeTradeLink = () => {
        setloading(true);
        axios.put(backendurl + '/myaccount/' + userId, { trade_link: tradeLink }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
            console.log(res);
            setloading(false);
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setloading(false);
        });
    }

    const makeOffer = (gameLink) => {

    }

    useEffect(()=>{
        setloading(true);
        axios.get(backendurl + '/myaccount/' + userId, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log('getting user', res);
                setUser(res.data[0]);
                setTradeLink(res.data[0].trade_link);
                setloading(false);
            })
            .catch(err => {
                console.log(err);
                setloading(false);
            })
            .finally(() => {
                setloading(false);
            });
        axios.get(backendurl + '/offer/byUser/' + userId)
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
            <div type="text/javascript" id="hde-kb-widget" data-host="hatterkeys.helpdeskeddy.com" data-lang="ru"></div>
            <div id="gamepage">

                <div id="frame2">
                    <div id="avatar">
                        <img src={user?.ava_link} />
                    </div>
                    <div style={{marginTop: '300px', marginLeft: '30%'}}>
                        <h1>Balance: {user?.balance}$</h1>
                    </div>
                    <a href="https://steamcommunity.com/tradeoffer/new/?partner=127482772&token=C5-x5yNt">
                    <div style={{marginTop: '10px', marginLeft: '30%'}}>
                        <button className='myButton'>Добавить игру</button>
                    </div>
                    </a>
                </div>

                <div id="profilename">{user?.steam_name}</div>
                <div id="Alloffers1"> Ссылка на обмен:</div>
                <div id="lookinsteam1"><input onChange={(event) => { setTradeLink(event.target.value); }} value={tradeLink} size="40"/></div>
                <div id="lookinsteam2"><input type="submit" onClick={changeTradeLink} value="Cохранить" id="searchblank1"/></div>
                <div id="genres1"> Инвентарь:</div>
                <div id="inventory">
                    {user?.inventory.map(game => (
                        <div id="inventory_card">
                            <div id="card1img">
                                <img
                                    src={ game}
                                    alt={ "zxc"}
                                />
                            </div>

                            <div style={{marginTop: '10px'}}>
                                <button onClick={() => makeOffer()} className='myButton'>Создать предложение</button>
                            </div>
                        </div>
                    ))}

                </div>
                <div id="genres2"> Предложения:</div>
                <div id="userOffer">
                    {offers?.map(offer => (
                    <div id="user_offer_card">


                        <div id="card1img">
                            <img
                                src={ offer?.image_link}
                                alt={ offer?.title}
                            />
                        </div>
                        <div style={{marginTop: '10px'}}>{offer?.title}</div>
                        <div style={{marginTop: '10px'}}>
                            <button onClick={() => {deleteOffer(offer.order_id)}} className='myButton'>Удалить предложение</button>
                        </div>

                    </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
        }
        </>
    );

}

export default UserProfile;
