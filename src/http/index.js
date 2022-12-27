import axios from "axios";
import {API_URL} from "../constants/constants"


const $host = axios.create({
    // baseURL: process.env.REACT_APP_API_URL
    baseURL: API_URL
});

export { $host }