import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

import {DialogWindow} from "../../components/components";
import UserSvg from "../../imgs/user.svg";
import PhoneSvg from "../../imgs/iphone.svg";
import CardSvg from "../../imgs/card.svg";
import TrashCan from "../../imgs/trash-can.svg"
import {addCurrentCard, STATUS_ROUTE} from "../../constants/constants";


const Settings = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isActiveWarningToChange, setActiveWarningToChange] = useState(false);
    const [isCurrentCard, setCurrentCard] = useState(false);
    const [chosenCard, setChosenCard] = useState(null);
    const cards = useSelector(store => store.cards.card);
    const aliasStatus = useSelector(store => store.statusAlias.statusAlias);
    const aliasIssuerName = useSelector(store => store.statusAlias.issuerName);
    const currentCard = useSelector(store => store.currentCard.card)
    const userName = useSelector(store => store.userInfo.userName)
    const phoneNumber = useSelector(store => store.userInfo.phoneNumber)
    const isDisabled = !!chosenCard;

    const nameInfo = "Registered name";
    const linkedInfo = "Mobile number linked to card";

    const getLasts = (maskedNum) => {
        const lastFour = maskedNum.split("*")
        return "**** " + lastFour[lastFour.length - 1];
    }

    const createAlias = (actualCard, phoneNumber) => {
        try {
            (async function create() {
                console.log("CREATE!!!")
                const fullObj = Object.assign({"alias": phoneNumber}, actualCard);
                const {maskedCard: _, ...newObj} = fullObj;
                return await axios.post('http://localhost:3333/create', newObj);
            }())
        } catch (error) {
            console.log("error in create")
            console.log(error);
        }
    }

    const updateAlias = (actualCard, phoneNumber = "998883334438") => {
        (async function create() {
            const fullObj = {"alias": phoneNumber, "guid": actualCard.guid, "expiryDate": actualCard.expiryDate};
            try {
                console.log(":", fullObj)
                const res = await axios.post('http://localhost:3333/update', fullObj);
                if (res.status === 200) {
                    dispatch(addCurrentCard(actualCard))
                    navigate(STATUS_ROUTE)
                }
            } catch (error) {
                console.log("error in update: ", error)
            }
        }())
    }

    const deleteAlias = async () => {

        try {
            const fullRes = {alias: phoneNumber, guid: currentCard.guid}
            const res = await axios.post('http://localhost:3333/delete', fullRes);
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    };

    const applyWarningHandler = async () => {
        const [actualCard] = cards.filter((card) => card.guid === chosenCard);
        try {
            if (aliasStatus === 204) {
                createAlias(actualCard, phoneNumber)
            } else {
                const {data} = await axios.post('http://localhost:3333/get', {"guid": actualCard.guid});
                const [isDefault] = data.data.aliases;
                if (isDefault.isDefault) {
                    setCurrentCard(true)
                }
            }
        } catch (error) {
            // createAlias(actualCard, phoneNumber)
            updateAlias(actualCard, phoneNumber)
        }
        setActiveWarningToChange(false);
    };

    const cancelWarningHandler = () => {
        setActiveWarningToChange(false);
    };
    const returnHandler = () => {
        setCurrentCard(false);
    };

    const saveBtnHandler = () => {
        setActiveWarningToChange(true)
    };

    return (
        <>
            <DialogWindow isActive={isActiveWarningToChange} setActive={setActiveWarningToChange}>
                <h2 className="dialog-window-title">Apply changes?</h2>
                <p className="dialog-window-text">You will start receiving money based on the new settings you have
                    made.</p>
                <footer className="dialog-footer">
                    <div className="dialog-btns">
                        <button className="apply-btn" onClick={applyWarningHandler}>APPLY</button>
                        <button className="cancel-btn" onClick={cancelWarningHandler}>CHANGE</button>
                    </div>
                </footer>
            </DialogWindow>
            <DialogWindow isActive={isCurrentCard} setActive={setCurrentCard}>
                <h2 className="dialog-window-title">Карта уже выбрана!</h2>
                <footer className="dialog-footer">
                    <div className="dialog-btns">
                        <button className="cancel-btn" onClick={returnHandler}>CHANGE</button>
                    </div>
                </footer>
            </DialogWindow>
            <div className="settings">
                <h3>Make changes to your linked card settings</h3>
                <div className="user-info-row">
                    <img width={30} height={30} src={UserSvg} alt="User"/>
                    <div>
                        <p className="main-text">{userName}</p>
                        <p className="secondary-text">{nameInfo}</p>
                    </div>
                </div>
                <div className="user-info-row-hell justify-between">
                    <div className="user-info-row">
                        <img width={30} height={30} src={PhoneSvg} alt="Phone"/>
                        <div>
                            <p className="main-text">+{phoneNumber}</p>
                            <p className="secondary-text">{linkedInfo}</p>
                        </div>
                    </div>
                    <button className="remove-btn" onClick={deleteAlias}>
                        <div className="remove-part">
                            <p className="remove-text">REMOVE&nbsp;</p>
                            <img width={15} height={15} src={TrashCan} alt="Phone"/>
                        </div>
                    </button>
                </div>
                <h4 className="linked-cards-title">Linked Cards</h4>
                <div className="linked-cards-wrapper">
                    {
                        cards.map((card, index) =>
                            <div className="card-info-row" key={card.guid}>
                                <div className="card-info">
                                    <img width={30} height={30} src={CardSvg} alt="Card"/>
                                    <div className="d-flex">
                                        <p className="main-text">{`${card.recipientFirstName} ${card.recipientLastName}`}</p>
                                        <p className="secondary-text">{`${card.cardType} ${getLasts(card.maskedCard)}`}</p>
                                    </div>
                                </div>

                                <div className="card-choose-btn visible">
                                    {aliasIssuerName === card.guid ?
                                        <input className="active" type="radio" name="card" value={card.guid}
                                               checked={true} onChange={event => setChosenCard(event.target.value)}/>
                                        :
                                        <input className="active" type="radio" name="card" value={card.guid}
                                               onChange={event => setChosenCard(event.target.value)}/>
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <footer>
                <button className="save-btn" onClick={saveBtnHandler} disabled={!isDisabled}>SAVE</button>
            </footer>
        </>
    );
};

export {Settings};