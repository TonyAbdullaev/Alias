import React from 'react';
import {useSelector} from "react-redux";

import UserSvg from "../imgs/user.svg";
import PhoneSvg from "../imgs/iphone.svg";
import CardSvg from "../imgs/card.svg";

const getLasts = (maskedNum) => {
    const lastFour = maskedNum.split("*")
    return "**** " + lastFour[lastFour.length - 1];
}


export const UserInfo = () => {
    const userName = useSelector(state => state.userInfo.userName);
    const phoneNumber = useSelector(state => state.userInfo.phoneNumber);
    const nameInfo = "Registered name";
    const userNumberInfo = "Mobile number linked to card";

    return (
        <>
            <div className="user-info-row">
                <img width={30} height={30} src={UserSvg} alt="User" />
                <div>
                    <p className="main-text">{userName}</p>
                    <p className="secondary-text">{nameInfo}</p>
                </div>
            </div>
            <div className="user-info-row">
                <img width={30} height={30} src={PhoneSvg} alt="Phone" />
                <div>
                    <p className="main-text">+{phoneNumber}</p>
                    <p className="secondary-text">{userNumberInfo}</p>
                </div>
            </div>
        </>
    )
}

export const LinkedCards = ({isAbleToChoose, userList}) => {
    const cards = useSelector(state => state.cards.card)
    const saveButtonHandler = () => console.log("Add card!");

    return (
        <div className="linked-cards-wrapper" >
            <form action="" onSubmit={saveButtonHandler}>
                {
                    cards.map((card, index) =>
                        <div className="card-info-row" key={index}>
                            <div className="card-info">
                                <img width={30} height={30} src={CardSvg} alt="Card" />
                                <div className="d-flex">
                                    <p className="main-text">{`${card.recipientFirstName} ${card.recipientLastName}`}</p>
                                    <p className="secondary-text">{`${card.cardType} ${getLasts(card.maskedCard)}`}</p>
                                </div>
                            </div>

                            <div className={`card-choose-btn ${isAbleToChoose ? 'visible' : 'hidden'}`}>
                                <input type="radio" name="card"/>
                            </div>
                        </div>
                    )
                }
                <button className="save-btn" type="submit">SAVE LOX</button>
            </form>
    </div>)
}

export const LinkedCard = () => {
    const currentCard = useSelector(state => state.currentCard.card)

    return (
        <div className="linked-cards-wrapper" >
            <div className="card-info-row">
                <div className="card-info">
                    <img width={30} height={30} src={CardSvg} alt="Card" />
                    <div className="d-flex">
                        <p className="main-text">{`${currentCard.recipientFirstName} ${currentCard.recipientLastName}`}</p>
                        <p className="secondary-text">{`${currentCard.cardType} ${getLasts(currentCard.maskedCard)}`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Card = () => {
    return (
        <div>
            <div className="card">
                <h4 className="user-info-title">CONTACT SUMMARY</h4>
                <UserInfo />
                <h4 className="linked-card-title">LINKED TO</h4>
                {/*<LinkedCards />*/}
                <LinkedCard />
            </div>
        </div>
    );
};

export default Card;