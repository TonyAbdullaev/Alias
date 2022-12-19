import axios from 'axios';
import { config } from 'dotenv';

config();
const { ASBT_MIDDLE_URL, ASBT_LOGIN, ASBT_PASSWORD } = process.env;

export default async (method, payload) => {
    const url = ASBT_MIDDLE_URL + method;
    const params = {
        auth: {
            username: ASBT_LOGIN,
            password: ASBT_PASSWORD,
        },
    }

    try {
        const { status, data } = await axios.post(url, payload, params);
        return { status, data };
    } catch({ status }) {
        return { status };
    }
};
