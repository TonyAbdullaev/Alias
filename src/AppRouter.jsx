import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Settings from "./components/Settings";
import Status from "./components/Status";
import Registration from "./components/Registration";

const AppRouter = () => {
    const isUserRegistered = true;
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/status" element={<Status />} />
                    <Route path="/registration" element={<Registration />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRouter;