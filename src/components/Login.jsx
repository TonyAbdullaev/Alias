import React, {useContext} from 'react';

import WelcomeImg from '../imgs/welcome.jpg';
import {Header} from "./components";
import Phone from '../imgs/iphone.svg';
import Security from '../imgs/security.svg';
import {Link, useNavigate} from "react-router-dom";
import AppContext from "../context";
import Loader from "./Loader";

const Login = () => {
    const { isLoading } = useContext(AppContext);
    const navigate = useNavigate();
    // const title = "Linked Card";

    const changeBtnHandler = () => navigate("/settings")
    return (
        <>
            { isLoading ?
                <Loader />
            :
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
                </div>}
        </>
    );
};

export default Login;