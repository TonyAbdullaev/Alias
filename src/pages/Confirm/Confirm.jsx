import React, {useState} from 'react';
import './index.css';
import {DialogWindow, Footer} from "../../components/components";
import {Link, useNavigate} from "react-router-dom";
import {SETTINGS_ROUTE, LOGIN_ROUTE, STATUS_ROUTE, ipotekaIssuerName} from "../../constants/constants";
import {useSelector} from "react-redux";

const Confirm = () => {
    const navigate = useNavigate();
    const [isActive, setActive] = useState(false);
    const {statusAlias, issuerName } = useSelector(store => store.statusAlias);
    const userName = useSelector(store => store.userInfo.userName);
    const warningText = `Нажимая на Confirm вы соглашаетесь на отправку данных в ${ipotekaIssuerName} для предоставления вашей 
    личной информации как ваше имя и контакты для верификации для отправителей чтоб они могли выбрать вашу выбранную карту!`;

    const changeBtnHandler = () => {
        if (statusAlias === 200 && issuerName !== ipotekaIssuerName) {
            setActive(!isActive);
        } else {
            return navigate(SETTINGS_ROUTE)
        }
    }

    const applyBtn = () => {
        setActive(!isActive)
        return navigate(SETTINGS_ROUTE)
    }

    const cancelBtn = () => {
        setActive(!isActive)
    }

    return (
        <div>
            <DialogWindow isActive={isActive} setActive={setActive}>
                <p className="dialog-window-text">У вас уже привязана карта {issuerName} в ваш Алиас! Вы хотите его изменить?</p>
                <footer className="dialog-footer">
                    <button className="small-primary-btn" onClick={applyBtn} >ПРИНЯТЬ</button>
                    <button className="small-secondary-btn" onClick={cancelBtn}>ОТМЕНА</button>
                </footer>
            </DialogWindow>
            <h3 className="home-title">Согласие на обмен вашими данными</h3>
            <p className="confirm-text">{warningText}</p>
            <p className="confirm-text">Ваше имя во переводов будет {userName} и это имя будет высвечиваться когда другие пользователи будут выбирать вашу карту для переводов.</p>
            <p className="confirm-text">
                <a href="" className="link">Условия пользованием</a> и <a href="" className="link">политика конфиденциальности</a>
            </p>
            <Footer>
                <Link to={LOGIN_ROUTE}>
                    <button className="secondary-btn" disabled={isActive}>ОТМЕНА</button>
                </Link>
                <button className="primary-btn" disabled={isActive} onClick={(changeBtnHandler)}>ПРИНЯТЬ</button>
            </Footer>
        </div>
    );
};

export default Confirm;