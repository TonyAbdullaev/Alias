import React, {useContext} from 'react';
import Card from "./Card";
import Done from "../imgs/done.png"
import Deny from "../imgs/cancel.png"
import {Link} from "react-router-dom";
import AppContext from "../context";
import Loader from "./Loader";

const Status = () => {
    const status = "approved";
    const { isLoading } = useContext(AppContext);
    const isApproved = (status) => status === "approved";

    const changeBtnHandler = () => console.log("Close");

    return (
        isLoading ? <Loader /> :
            <div className="status">
                <div className="status-block">
                    { isApproved(status)
                        ? <img className="status-img" src={Done} alt="approved" />
                        : <img className="status-img" src={Deny} alt="denied" />
                    }
                    <h3 className="status-title">Status title</h3>
                    <p className="status-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut facere in iste minima numquam quo similique soluta unde vitae voluptas.</p>
                </div>
                <Card />
                <footer>
                    <Link to="/">
                        <button className="save-btn" onClick={changeBtnHandler}>Close</button>
                    </Link>
                </footer>
            </div>
    );
};

export default Status;