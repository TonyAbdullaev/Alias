import React, {useEffect, useState} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

import Home from "./components/Home";
import Settings from "./components/Settings";
import Status from "./components/Status";
import Login from "./components/Login";
import {HOME_ROUTE, LOGIN_ROUTE, SETTINGS_ROUTE, STATUS_ROUTE} from "./constants/constants";

const AppRouter = () => {
    const dispatch = useDispatch();
    const [isSign, setSign] = useState(false);
    const [hasGotCards, setGotCards] = useState(false);
    // get phoneNumber
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const phoneNumber = urlParams.get('userPhone');


    useEffect(() => {
        (async function fetchData() {
            try {
                const {data} = await axios.post('http://localhost:3333/getVisaCards', {"userPhone": phoneNumber });
                const {status} = await axios.post('http://localhost:3333/resolve', {"alias": phoneNumber });
                const guid = data.map(item => item.guid);
                dispatch();
                console.log("ASBT: ", data);
                console.log("Alias: ", status);
                console.log("GUID: ", guid);
            } catch (error) {
                alert("error")
                console.log(error)
            }
        }());
    }, [null]);
    // const cards = useSelector(cards => cards);

    return (
        <div>
            <Routes>
                <Route path={HOME_ROUTE} render={
                    () => {

                        const isUserRegistered = false;
                        return isUserRegistered ? <Home /> : <Login />

                    }
                }>
                    <Route index path={HOME_ROUTE} element={<Home />}/>
                    <Route path={SETTINGS_ROUTE} element={<Settings />} />
                    <Route path={STATUS_ROUTE} element={<Status />} />
                    <Route path={LOGIN_ROUTE} element={<Login />} />
                </Route>
            </Routes>
        </div>
    );
};

export default AppRouter;