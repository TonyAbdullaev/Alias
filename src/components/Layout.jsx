import React, {Suspense} from 'react';
import {Await, defer, Outlet, useLoaderData} from "react-router-dom";
import {useDispatch} from "react-redux";

import {ErrorPage, Header, Loader} from "./components";
import {addAlias, addAllCards, addCurrentCard, addUserInfo} from "../constants/constants";

import {getActualCard, getAlias, getCard} from "../controlers/api";

const LayoutLoader = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const phoneNumber = urlParams.get('userPhone');

    try {
        const cards = await getCard(phoneNumber)
        return defer({
            cards,
            currentCard: await getActualCard(cards, phoneNumber),
            alias: await getAlias(phoneNumber),
            phoneNumber
        })
    } catch (error) {
        console.log(error)
    }

};

const getUserInfo = (cards) => {
    return `${cards[0].recipientFirstName} ${cards[0].recipientLastName}`;
}

const Layout = () => {
    const dispatch = useDispatch();
    const {cards, currentCard, alias, phoneNumber} = useLoaderData();
    const {status, issuerName} = alias;

    if (!cards) {
        throw new Error("You don't have cards")
    }

    dispatch(addAllCards(cards));
    dispatch(addCurrentCard(currentCard));
    dispatch(addUserInfo({userName: getUserInfo(cards), phoneNumber}))
    dispatch(addAlias({status, issuerName}));
    return (
        <>
            <Header/>
            <Suspense fallback={<Loader/>}>
                <Await
                    resolve={status}
                    errorElement={<ErrorPage/>}
                >
                    <Outlet/>
                </Await>
            </Suspense>
        </>
    );
};

export {Layout, LayoutLoader};