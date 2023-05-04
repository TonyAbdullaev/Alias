import React, {Suspense} from "react";
import {Navigate, Await} from "react-router-dom";
import {useSelector} from "react-redux";

import {
    CONFIRM_ROUTE,
    ERROR_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE
} from "../constants/constants";

const redirectToPage = (cards, aliasStatus, aliasIssuerName) => {
    const queryString = window.location.search;
    const page = queryString.split('/');

    const currentPage = (linkPage) => {
        return page.indexOf(linkPage) !== -1;
    }

    if (!cards) {
        if(!currentPage(ERROR_ROUTE)){
            console.log("No cards and page isn't ERROR PAGE")
            return ERROR_ROUTE;
        }
    } else if (!aliasIssuerName || aliasStatus === 204) {
        if(!currentPage(LOGIN_ROUTE)){
            console.log("Has cards but doesn't have alias and page isn't LOGIN")
            return LOGIN_ROUTE;
        }
    }  else if (aliasStatus === 200 && aliasIssuerName === 'JSCMB Ipoteka-Bank') {
        if(!currentPage(HOME_ROUTE)){
            console.log("There is cards and user has alias, also page isn't home")
            return HOME_ROUTE;
        }
    } else {
        if(!currentPage(ERROR_ROUTE)){
            console.log("user has cards but don't have alias and don't have cards with our issuer name")
            return ERROR_ROUTE;
        }
    }
};

const InitialPage = () => {
    const cards = useSelector(state => state.cards.card)
    const status = useSelector(state => state.statusAlias.statusAlias)
    const issuerName = useSelector(state => state.statusAlias.issuerName)

    const page = redirectToPage(cards, status, issuerName)

    return (
        <>
            <Suspense fallback={<h2>LOADING DATA...</h2>}>
                <Await resolve={status}>
                    <Navigate to={page} />
                </Await>
            </Suspense>
        </>
    );
};

export {InitialPage};