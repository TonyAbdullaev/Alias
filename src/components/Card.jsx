import React from 'react';
import UserSvg from "../imgs/user.svg";
import PhoneSvg from "../imgs/iphone.svg";
import CardSvg from "../imgs/card.svg";
import {Link} from "react-router-dom";

export const UserInfo = ({userList}) => {
    const userName = "Abdullaev Tokhirbek";
    const nameInfo = "Registered name";
    const userNumber = "+998907778899";
    const userNumberInfo = "Mobile number linked to card";

    return (
        <>
            <div className="row-info">
                <img width={30} height={30} src={UserSvg} alt="User" />
                <div>
                    <p className="main-text">{userName}</p>
                    <p className="secondary-text">{nameInfo}</p>
                </div>
            </div>
            <div className="row-info">
                <img width={30} height={30} src={PhoneSvg} alt="Phone" />
                <div>
                    <p className="main-text">{userNumber}</p>
                    <p className="secondary-text">{userNumberInfo}</p>
                </div>
            </div>
        </>
    )
}

export const LinkedCards = ({isAbleToChoose, userList}) => {
    const userCardName = "Ipoteka bank";
    const userCardInfo = "VIsa DEBIT **** 4321";

    const addBtnHandler = () => console.log("Add card!");

    // return userList.map((card) =>
        return (
            <div className="linked-cards-wrapper">
                <div className="row-info">
                    <img width={30} height={30} src={CardSvg} alt="Card" />
                    <div>
                        <p className="main-text">{userCardName}</p>
                        <p className="secondary-text">{userCardInfo}</p>
                    </div>
                    <div className={`card-choose ${isAbleToChoose ? 'visible' : 'hidden'}`}>
                        <input type="radio" name="card" />
                    </div>
                </div>
                {/*<div className={`${isAbleToChoose ? 'visible' : 'hidden'}`}>*/}
                {/*    <button className="add-btn" onClick={addBtnHandler}>ADD NEW CARD</button>*/}
                {/*</div>*/}
            </div>
        )
// )
}


const Card = () => {
    return (
        <div>
            <div className="card">
                <h4 className="user-info-title">CONTACT SUMMARY</h4>
                <UserInfo />
                <h4 className="linked-card-title">LINKED TO</h4>
                <LinkedCards />
            </div>
        </div>
    );
};

export default Card;