import React from 'react';

import WelcomeImg from '../imgs/welcome.jpg';
import Header from "./Header";
import Phone from '../imgs/iphone.svg';
import Security from '../imgs/security.svg';
import {Link} from "react-router-dom";

const Registration = () => {
    const title = "Linked Card";

    const changeBtnHandler = () => console.log("ACTIVATE")
    return (
        <>
            {/*<Header title={title} />*/}
            <div className="registration">
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
                    {/*<Link to="/">*/}
                         <button className="save-btn" onClick={changeBtnHandler}>ACTIVATE</button>
                    {/*</Link>*/}
                </footer>
            </div>
        </>
    );
};

export default Registration;