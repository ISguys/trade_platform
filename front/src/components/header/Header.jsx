import React, {useState , useContext}from 'react';
import { Link } from 'react-router-dom';

import SignInButton from './SignInButton';
import { AuthContext } from '../../context/auth-context';
import sitelogo from '../../assets/logo.png';

const Header = () => {
    const { isLoggedIn, logout } = useContext(AuthContext);
   return (
    <>
            <div id="site_title_bar_wrapper">
                <div id="site_title_bar">
                    <div id="menu">
                        <Link to="/">
                            <div id="general">
                                <div id="general1">Главная</div>
                            </div>
                        </Link>

                        {' '}
                        <Link to="/Warranty">
                            <div id="warranty">
                                <div id="warranty1">Гарантии</div>
                            </div>
                        </Link>
                        <Link to="/Warranty">
                            <div id="review"><div id="review1">Отзывы</div></div>
                        </Link>



                        {isLoggedIn ? (
                            <Link to="/userprofile">
                                {' '}
                                <div id="help">
                                    <div id="help1">Профиль</div>
                                </div>
                            </Link>
                        ) : (
                            <SignInButton />
                        )
                        }
                      <div type="text/javascript" id="hde-kb-widget" data-host="hatterkeys.helpdeskeddy.com" data-lang="ru"></div>
                        <Link to="/">
                            <div id="site_title">
                                <div>
                                    <img src={sitelogo} alt="logo" className="logo" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>



    </>
)};

export default Header;
