import React from 'react';
import {useRouteError} from "react-router-dom";

import './index.css';
import Warning from "../../imgs/warning.svg";

const NotFound = () => {
    const error = useRouteError();
    // console.log("errrorororor: ", error.message)

    return (
        <div className="container">
            <img src={Warning} height={60} width={60} alt="Warning"/>
            <h2 style={{marginTop: "10px"}}>{error.message}</h2>
        </div>
    );
};

export default NotFound;