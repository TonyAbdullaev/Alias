import React from 'react';

import Card from "../../components/Card";
import {Link} from "react-router-dom";
import {SETTINGS_ROUTE} from "../../constants/constants";

const Home = () => {
    return (
        <>
            <div className="title-block">
                <h3 className="home-title">Receive payment through <br/> your mobile number</h3>
            </div>
            <Card />
            <footer>
                <Link to={SETTINGS_ROUTE}>
                    <button className="change-btn">CHANGE</button>
                </Link>
            </footer>
        </>
    )
}

export default Home;