import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import Home from "./pages/Home/Home";
import Status from "./pages/Status/Status";
import Login from "./pages/Login/Login";
import {InitialPage} from "./pages/InitialPage"
import {Settings} from "./pages/Settings/Settings";
import Confirm from "./pages/Confirm/Confirm";
import NotFound from "./pages/NotFound/NotFound";

import {Layout, LayoutLoader} from "./components/Layout";

import {
    HOME_ROUTE,
    SETTINGS_ROUTE,
    STATUS_ROUTE,
    LOGIN_ROUTE,
    ERROR_ROUTE,
    CONFIRM_ROUTE
} from "./constants/constants";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} loader={LayoutLoader} errorElement={<NotFound />}>
        <Route index element={<InitialPage />}/>
        <Route path={HOME_ROUTE} element={<Home  />}/>
        <Route path={SETTINGS_ROUTE} element={<Settings />} />
        <Route path={STATUS_ROUTE} element={<Status />} />
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={CONFIRM_ROUTE} element={<Confirm />} />
        <Route path={ERROR_ROUTE} element={<NotFound />} />
    </Route>
));

const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default AppRouter;