import fs from 'fs';
import nodeJose from 'node-jose';
import CryptoJS from 'crypto-js';
import { config } from 'dotenv';

import * as url from 'url';
import path from 'path';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

config();
const { ENCRYPT_KEYID, SERVER_CERT_DIR, CLIENT_CERT_DIR, SECRET_WORD } = process.env;

export const encrypt = async (payload) => {
    const payloadString = typeof payload === 'string' ? payload : JSON.stringify(payload);
    // const keystore = nodeJose.JWK.createKeyStore();
    const encProps = {
        kty: "RSA",
        kid: ENCRYPT_KEYID,
        alg: 'RSA-OAEP-256',
        enc: 'A128GCM',
        key_opts: ["wrapKey","enc"],
    };
    const pathToEncCert = path.join(__dirname, '../src', SERVER_CERT_DIR);
    const encryptionCert = fs.readFileSync(pathToEncCert);
    return await nodeJose.JWK.asKey(encryptionCert, 'PEM', encProps)
        .then(async (key) => {
            const result = await nodeJose.JWE.createEncrypt({
                format: 'compact',
                fields: {
                    'enc': 'A128GCM',
                    'iat': Date.now()
                }
            }, key)
                .update(payloadString)
                .final();
            return JSON.stringify({ encData: result });
        });
};

export const decrypt = async (encryptedPayloadString) => {
    if (!encryptedPayloadString) return '';
    const encryptedPayload = typeof encryptedPayloadString == 'string' ? JSON.parse(encryptedPayloadString) : encryptedPayloadString;
    // const keystore = nodeJose.JWK.createKeyStore();
    const decProps = {
        kid: ENCRYPT_KEYID,
        alg: 'RSA-OAEP-256',
        enc: 'A128GCM'
    };
    const pathToDecrCert = path.join(__dirname, '../src', CLIENT_CERT_DIR);
    const decryptionKey = fs.readFileSync(pathToDecrCert);
    const key = await nodeJose.JWK.asKey(decryptionKey, 'PEM', decProps);
    const decrypted = await nodeJose.JWE
        .createDecrypt(key)
        .decrypt(encryptedPayload.encData, {contentAlg: 'A128GCM', alg: 'RSA-OAEP-256'});
    const decryptedPayload = decrypted.payload.toString() ? JSON.parse(decrypted.payload.toString()) : '';
    return decryptedPayload;
};

export const encryptPan = (pan) => CryptoJS.AES.encrypt(pan, SECRET_WORD).toString();

export const decryptPan = (encryptedPan) => CryptoJS.AES.decrypt(encryptedPan, SECRET_WORD).toString(CryptoJS.enc.Utf8);
