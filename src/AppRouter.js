import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Settings from "./components/Settings";
import Status from "./components/Status";

const AppRouter = () => {
    return (
        <div className="">
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/status" element={<Status />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRouter;