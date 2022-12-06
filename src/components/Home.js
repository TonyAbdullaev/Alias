import React from 'react';

import Header from "./Header";
import Card from "./Card"
import {Link} from "react-router-dom";


const Home = () => {
    const title = "Home";
    const changeBtnHandler = () => {
        console.log('click on change!')
    }

    return (
        <div>
            <Header title={title} />
            <div className="title-block">
                <h3 className="home-title">Receive payment through <br/> your mobile number</h3>
            </div>
            <Card />

            <footer>
                <Link to="/settings">
                    <button className="change-btn" onClick={changeBtnHandler}>CHANGE</button>
                </Link>
            </footer>
        </div>
    );
};

export default Home;