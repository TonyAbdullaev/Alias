import React from 'react';

import WelcomeImg from '../../imgs/welcome.jpg';
import Phone from '../../imgs/iphone.svg';
import Security from '../../imgs/security.svg';
import {useNavigate} from "react-router-dom";
import {CONFIRM_ROUTE} from "../../constants/constants";

const Login = () => {
    const navigate = useNavigate();
    const changeBtnHandler = () => navigate(CONFIRM_ROUTE);

    return (
        <>
            <div className="login">
                <img className="reg-img" src={WelcomeImg} alt="welcome" />
                <div className="reg-content">
                    <h1 className="reg-title">Send and receive money through mobile phone</h1>
                    <div className="reg-content-row">
                        <img className="medium-icon" src={Phone} alt="phone" />
                        <p className="reg-content-text">Link your mobile number to your card to start receiving money</p>
                    </div>
                    <div className="reg-content-row">
                        <img className="medium-icon" src={Security} alt="phone" />
                        <p className="reg-content-text">Receiving funds securely without sharing your card number</p>
                    </div>
                </div>
                <footer>
                    <button className="save-btn" onClick={changeBtnHandler}>ACTIVATE</button>
                </footer>
            </div>
        </>
    );
};

export default Login;