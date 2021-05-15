import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import { AuthContext } from './context/auth-context';
import './App.css';

let logoutTimer;

function App() {

    const [tok, setToken] = useState(false);
    const [tokenExperationTime, setTokenExperationTime] = useState();
    const [uid, setUserId] = useState();

    const storedData = JSON.parse(localStorage.getItem('userData'));

    const login = useCallback((token, userId, experationDate) => {
        setToken(token);
        setUserId(userId);
        const tokenExpire = experationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
        setTokenExperationTime(tokenExpire);
        localStorage.setItem('experation', tokenExpire.toISOString());
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        setTokenExperationTime(null);
        localStorage.removeItem('userData');
        localStorage.removeItem('experation');
    }, []);

    useEffect(() => {
        if (tok && tokenExperationTime) {
            const remainingTime = tokenExperationTime.getTime() - new Date().getTime();
            logoutTimer = setTimeout(logout, remainingTime);
        } else {
            clearTimeout(logoutTimer);
        }
    },
    [tok, logout, tokenExperationTime]);

    useEffect(() => {
        const experation = localStorage.getItem('experation');
        if (storedData && experation && storedData.token && new Date(experation) > new Date()) {
            login(storedData.userId, storedData.token, new Date(experation));
        }
    },
    [login]);

    return (
        <AuthContext.Provider value={
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
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
