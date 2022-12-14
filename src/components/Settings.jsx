import React, {useContext, useState} from 'react';
import {LinkedCards, UserInfo} from "./Card";
import {DialogWindow, Header} from "./components";
import AppContext from "../context";
import Loader from "./Loader";
import {Navigate, useNavigate} from "react-router-dom";
import axios from "axios";
import {createAlias} from "../controlers/isSigned";

const Settings = () => {
    const title = "Settings";
    const { isLoading, phoneNumber, cards } = useContext(AppContext);
    const [isActive, setActive] = useState(false);


    const userList = [
        {
            ownerName: 'Abdullaev Tokhirbek',
            cardNumber: '9999888877776666',
            cardName: 'Ipoteka Visa',
            cardType: 'Visa Debit'
        },
        {
            ownerName: 'Tony Abdullaev',
            cardNumber: '55554444333322221111',
            cardName: 'Aloqa Visa',
            cardType: 'Visa Debit'
        },
        {
            ownerName: 'Tomas Shelby',
            cardNumber: '1111999922228888',
            cardName: 'SQB visa card',
            cardType: 'Visa Debit'
        },
    ];

    const applyHandler = () => {
        console.log("Apply");
        setActive(false);
    };
    const cancelHandler = () => {
        console.log("Return to the page!")
        setActive(false);
    };

    const saveBtnHandler = async () => {
        try {
            const updateAlias = createAlias({...cards, alias: phoneNumber})
            console.log("UP: ",updateAlias)
        } catch (error) {
            alert(error)
        }
    };

    return (
        isLoading ? <Loader /> :
        <div>
            <Header title={title} />
            <div className="settings">
                <h3>Make changes to your linked card settings</h3>
                <UserInfo />
                <h4 className="linked-cards-title">Linked Cards</h4>
                <LinkedCards isAbleToChoose={true} cardList={userList} />
            </div>
            <DialogWindow isActive={isActive} setActive={setActive}>
                <h2 className="dialog-window-title">Apply text</h2>
                <p className="dialog-window-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid aperiam atque ea eligendi
                    explicabo magnam non perferendis quis reprehenderit.</p>
                <footer className="dialog-footer">
                    <div className="dialog-btns">
                        <button className="apply-btn" onClick={applyHandler}>APPLY</button>
                        <button className="cancel-btn" onClick={cancelHandler}>CHANGE</button>
                    </div>
                </footer>
            </DialogWindow>
            <footer>
                <button className="save-btn" onClick={saveBtnHandler}>SAVE</button>
            </footer>
        </div>
    );
};

export default Settings;