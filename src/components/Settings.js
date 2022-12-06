import React, {useState} from 'react';
import Header from "./Header";
import {LinkedCards, UserInfo} from "./Card";
import LoaderSvg from "../imgs/Loading.svg"
import DialogWindow from "./DialogWindow";

const Settings = () => {
    const title = "Settings";

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

    const saveBtnHandler = () => setActive(true);

    return (
        <div>
            <Header title={title} />
            <div className="settings">
                <h3>Make changes to your linked card settings</h3>
                <UserInfo />
                <h4 className="linked-cards-title">Linked Cards</h4>
                <LinkedCards isAbleToChoose={true} cardList={userList} />
            </div>
            <DialogWindow isActive={isActive} setActive={setActive} />
            <footer>
                <button className="save-btn" onClick={saveBtnHandler}>SAVE</button>
            </footer>
        </div>
    );
};

export default Settings;