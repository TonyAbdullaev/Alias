import axios from 'axios';
import { config } from 'dotenv';
import https from 'https';
import * as url from 'url';
import path from 'path';
import fs from 'fs';

import { encrypt, decrypt } from '../utils/crypto.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

config();
const { VISA_ALIAS_HOST, VISA_ALIAS_HOST_TEST, VISA_ALIAS_LOGIN, VISA_ALIAS_PASSWORD, ENCRYPT_KEYID } = process.env;
const { PRIVATE_KEY, SSL_CERT } = process.env;

const httpsAgent = new https.Agent({
    cert: fs.readFileSync(path.join(__dirname, '../src', SSL_CERT)),
    key: fs.readFileSync(path.join(__dirname, '../src', PRIVATE_KEY)),
    // ca: fs.readFileSync(path.join) add this if you need to
});

export default async (path, payload, method = 'POST') => {
    const uri = VISA_ALIAS_HOST || VISA_ALIAS_HOST_TEST + path;
    const encryptedPayload = await encrypt(payload);
    
    const params = {
        auth: {
            username: VISA_ALIAS_LOGIN,
            password: VISA_ALIAS_PASSWORD,
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            keyId: ENCRYPT_KEYID,
        },
        data: encryptedPayload,
        httpsAgent,
        method,
    };

    try {
        const { data, status } = await axios(uri, params);
        if (!data) return { status };

        const decryptedPayload = await decrypt(data);
        return { status,  decryptedPayload };

    } catch(e) {
        // console.log('Visa request error: ', e);
        const { response: { status, data } } = e;
        if (!data) return { status };
        const decryptedPayload = await decrypt(data);
        // console.log('decryptedPayload: ', decryptedPayload);
        // console.log('data: ', data);
        return { status,  decryptedPayload };
    }
};
