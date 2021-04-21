import React, { useEffect, useContext} from 'react';

import { AuthContext } from '../../context/auth-context';

const SignInButton = () => {
    const auth = useContext(AuthContext);

    const handleLogin = () => {
        const popupWindow = window.open(
            "http://localhost:3001/auth",
            "_blank",
            "width=800, height=600",
        );
        if (window.focus) popupWindow.focus();
        console.log("and what next?")
        console.log({auth})
    };



    useEffect(() => {
        console.log("mb here?")
        window.addEventListener("message", event => {
            console.log("mb here?2")
            if (event.origin !== "http://localhost:3001") return;
            console.log("here");
            const { token, ok, username, id } = event.data;
            console.log({ token, ok, username, id });
            if (ok) {
                localStorage.setItem('userData', JSON.stringify({
                    userId: id,
                    token: token,
                    username: username,
                }));
                auth.login(token, id);
            }
        });
    }, [auth]);

    return (
            <div
                id="steamlogin"
                onClick={handleLogin}>
            </div>
    );
};

export default SignInButton;