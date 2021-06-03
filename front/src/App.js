import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import { AuthContext } from './context/auth-context';
import './App.css';
import Sidebar from "./components/Sidebar";
import GameList from "./components/GameList";
import PGSwitch from "./components/PGSwitch";
import Footer from "./components/Footer";
import Game1 from "./components/Game1";
import Warranty from "./components/Warranty";
import userprofile from "./components/userprofile";
let logoutTimer;

function App() {

    const [tok, setToken] = useState(false);
    const [tokenExpirationTime, setTokenExpirationTime] = useState();
    const [uid, setUserId] = useState();

    const storedData = JSON.parse(localStorage.getItem('userData'));

    const login = useCallback((token, userId, ExpirationDate) => {
        setToken(token);
        setUserId(userId);
        const tokenExpire = ExpirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
        setTokenExpirationTime(tokenExpire);
        localStorage.setItem('Expiration', tokenExpire.toISOString());
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        setTokenExpirationTime(null);
        localStorage.removeItem('userData');
        localStorage.removeItem('Expiration');
    }, []);

    useEffect(() => {
        if (tok && tokenExpirationTime) {
            const remainingTime = tokenExpirationTime.getTime() - new Date().getTime();
            logoutTimer = setTimeout(logout, remainingTime);
        } else {
            clearTimeout(logoutTimer);
        }
    },
    [tok, logout, tokenExpirationTime]);

    useEffect(() => {
        const Expiration = localStorage.getItem('Expiration');
        if (storedData && Expiration && storedData.token && new Date(Expiration) > new Date()) {
            login(storedData.userId, storedData.token, new Date(Expiration));
        }
    },
    [login]);

    return <AuthContext.Provider value={
        {
            isLoggedIn: !!tok,
            token: tok,
            userId: uid,
            login,
            logout
        }
    }>
        <BrowserRouter>
            <Route render={() => (<Header />)} ></Route>
            <Route exact path="/Warranty" component={Warranty} />
            <Route exact path="/userprofile" component={userprofile} />
            <Route exact path="/">
                <Sidebar />
                <GameList />
                <PGSwitch />
                <Footer />
            </Route>
            <Route exact path="/games/:gameId">
                <Game1 />
            </Route>
        </BrowserRouter>
    </AuthContext.Provider>;
}

export default App;
