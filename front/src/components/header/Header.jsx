import React, {useState , useContext}from 'react';
import { Link } from 'react-router-dom';

import SignInButton from './SignInButton';
import { AuthContext } from '../../context/auth-context';
import sitelogo from '../../assets/logo.png';
import Modal from '../../components/Modal';


const Header = () => {
    const [modalActive, setModalActive] = useState(true);
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

                            <div id="review" onClick ={() => setModalActive(true)}><div id="review1">Отзывы</div></div>


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
            <Modal active={modalActive} setActive={setModalActive}>
                <div id="modalcontent">
                <div> <img src={sitelogo} alt="logo" className="gamepageimg"/></div>
                <div id ="sellprice" >Введите цену продажи:</div>
                <div><input type="number" name="name" id="searchblank1"/></div>
                <input type="Submit" value="Продать" id="sellbutton" />
                </div>
            </Modal>



    </>
)};

export default Header;
