import React from 'react';
import { useNavigate } from 'react-router-dom';
import WarningSvg from "../imgs/warning.svg";
import LoaderSvg from "../imgs/small-loading.svg";
import BackBtn from "../imgs/back.png";

export const ErrorPage = ({children}) => {
    return (
        <div className="loader">
            <div className="content-loader">
                <img className="loader-img" src={WarningSvg} alt="Loader" />
                {children}
            </div>
        </div>
    );
};

export const DialogWindow = ({isActive, setActive, children}) => {

    return (
        <div className={isActive ? "dialog-window active" : "dialog-window"} onClick={() => setActive(false)}>
            <div className={isActive ? "dialog-window-content active" : "dialog-window-content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export const Header = ({title}) => {
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

export const Loader = () => {
    return (
        <div className="loader">
            <div className="content-loader">
                <img className="loader-img" src={LoaderSvg} alt="Loader" />
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    );
};

export const Footer = ({children}) => {
   return (
       <div className="footer">
           {children}
       </div>
   )
};


