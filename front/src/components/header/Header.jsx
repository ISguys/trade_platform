import React from 'react';
import { BrowserRouter, Link, Route} from 'react-router-dom';

import Game1 from '../Game1';
import Navbar from '../Navbar';
import PGSwitch from '../PGSwitch';
import Sidebar from '../Sidebar';
import GameList from '../GameList';
import Footer from '../Footer';
import Warranty from '../Warranty';
import SignInButton from './SignInButton';
import ProfileWrapperAuthorized from './ProfileWrapperAuthorized'
import { AuthContext } from '../../context/auth-context';
import sitelogo from '../../assets/logo.png';

const Header = () => {
  return (
    <>
   <BrowserRouter>
    <div id="site_title_bar_wrapper">
      <div id="site_title_bar">
        <div id="menu">
        <Link to="/">
            <div id="general">
              <div id="general1">Главная</div>
            </div>
            </Link>
          
            {" "}
            <Link to="/Warranty">
            <div id="warranty">
              <div id="warranty1">Гарантии</div>
            </div>
            </Link>
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
            {AuthContext.isLoggedIn ? (
                <ProfileWrapperAuthorized clicked={AuthContext.logout()} />
            ) : (
                    <SignInButton />
            )
            }

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
    <Route exact path="/Warranty" component={Warranty} />
    <Route exact path="/Game1" component={Game1} />
    <Route exact path="/">  
          <Navbar />
               <Sidebar />
               <GameList />
               <PGSwitch />
               <Footer />
               </Route>
    </BrowserRouter>
    


    
</>
  );
};

export default Header;