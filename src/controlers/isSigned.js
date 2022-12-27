import axios from "axios";
import {useContext, useEffect} from "react";
import AppContext from "../context";
import {useNavigate} from "react-router-dom";


export const getAlias = async (phoneNumber) => {
    const resASBT = await axios.post('http://localhost:3333/getVisaCards', {"userPhone": phoneNumber });
    const resAlias = await axios.post('http://localhost:3333/resolve', {"alias": phoneNumber });
    // const guid = resASBT.data.map(item => item.guid);
    return {
        cards: resASBT.data,
        aliasStatus: resAlias.status
    }
}

export const createAlias = async (cards, phoneNumber, setLoading) => {
    try {
        setLoading(true);
        const returnObj = {alias: phoneNumber, ...cards};
        const createRes = await axios.post('http://localhost:3333/create', returnObj)
        console.log("create: ", createRes)
        setLoading(false);
    } catch (error) {
        console.log(error)
    }
};

export const updateAlias = (phoneNumber, guid, setLoading) => {
    try {
        setLoading(true);
        const returnObj = {alias: phoneNumber, guid};
        const updateRes = axios.post('http://localhost:3333/update', returnObj)
        console.log(updateRes)
        setLoading(false);
    } catch (error) {
        console.log(error)
    }
}

export const deleteAlias = (phoneNumber, setLoading) => {
    try {
        setLoading(true);
        const updateRes = axios.post('http://localhost:3333/delete', {alias: phoneNumber});
        console.log(updateRes)
        setLoading(false);
    } catch (error) {
        console.log(error)
    }
}
