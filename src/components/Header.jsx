import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackBtn from "../imgs/back.png"

const Header = ({title}) => {

    const navigate = useNavigate();

    return (
        <div className="header">
            <div>
                <button className="header-back-btn" onClick={() => navigate(-1)}>
                    <img className="back-btn" src={BackBtn} alt="back"/>
                </button>
            </div>
            <div className="header-title-wrapper">
                <p className="header-title">{title}</p>
            </div>
        </div>
    );
};

export default Header;