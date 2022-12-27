import React from 'react';

import {Header} from "./components";
import Card from "./Card"
import {Link, useLocation} from "react-router-dom";
import Login from "./Login";
// import Loader from "./Loader";
// import Registration from "./Registration";

const HomePage = () => {
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
    )
}

const Home = () => {

    const isUserRegistered = true;
    return (
        // <Loader />
        // <Registration />
        <>
            {
                isUserRegistered ? <HomePage /> : <Login />
            }
        </>
    );
};

export default Home;