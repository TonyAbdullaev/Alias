import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {addAlias, addAllCards, HOME_ROUTE, LOGIN_ROUTE, STATUS_ROUTE} from "../constants/constants";
import {useDispatch, useSelector} from "react-redux";
import AppContext from "../context";


const UseFetch = () => {
    console.log("Use Fetch!")
    // const dispatch = useDispatch();
    // // const {phoneNumber, setLoading} = useContext(AppContext)
    // const phoneNumber = '998883334438'
    // const queryString = window.location.search;
    // const page = queryString.split('/');
    //
    // const currentPage = (linkPage) => {
    //     return page.indexOf(linkPage) !== -1;
    // }
    //
    // useEffect(() => {
    //     (async function fetchData() {
    //         try {
    //             // setLoading(true)
    //             const {data} = await axios.post('http://localhost:3333/getVisaCards', {"userPhone": phoneNumber });
    //             const {status, data: issuerName} = await axios.post('http://localhost:3333/resolve', {"alias": phoneNumber });
    //             const alias = {status, issuerName};
    //             dispatch(addAllCards(data));
    //             dispatch(addAlias(alias));
    //             // setLoading(false)
    //         } catch (error) {
    //             alert("error")
    //             console.log(error)
    //         }
    //     }());
    // }, []);
    //
    // const cards = useSelector(store => store.cards.cards);
    // const aliasStatus = useSelector(store => store.statusAlias.statusAlias);
    // const aliasIssuerName = useSelector(store => store.statusAlias.issuerName);
    // console.log("fuck: ",cards)
    // if (!cards) {
    //     if(!currentPage(STATUS_ROUTE)){
    //         console.log("No cards and page isn't STATUS")
    //         return STATUS_ROUTE;
    //     }
    // } else if (!aliasIssuerName) {
    //     if(!currentPage(STATUS_ROUTE)){
    //         console.log("Has cards but doesn't alias have page isn't STATUS")
    //         return LOGIN_ROUTE;
    //     }
    // }  else if (aliasStatus === 200 && aliasIssuerName.data.issuerName === 'JSCMB Ipoteka-Bank') {
    //     if(!currentPage(STATUS_ROUTE)){
    //         console.log("There is cards and user has alias also page isn't home")
    //         return HOME_ROUTE;
    //     }
    // } else {
    //     if(!currentPage(STATUS_ROUTE)){
    //         console.log("user has cards but don't have alias and don't have cards with our issuer name")
    //         return LOGIN_ROUTE;
    //     }
    // }
};

export default UseFetch;