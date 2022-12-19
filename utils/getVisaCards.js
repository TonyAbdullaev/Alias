import { config } from 'dotenv';
import getTypeByBin from './getTypeByBin.js';

import { encryptPan } from './crypto.js';

config();
const { OUR_BANK_BINS } = process.env;

export default (cards) =>  {
    const bins = OUR_BANK_BINS.split(',');
    const result = []
    for (const bin of bins) {
        const newCards = cards
                            .filter(({ cardNumber }) => cardNumber.startsWith(bin))
                            .map(({ cardHolderName, cardNumber, rbsNumber: guid }) => {
                                const [lastName, recipientFirstName] = cardHolderName.split(' ');
                                const recipientLastName = `${lastName[0]}.`; // first letter of last name
                                const typeNum = parseInt(cardNumber[8]); // 9th number of pan
                                const cardType = getTypeByBin(bin, typeNum);
                                const recipientPrimaryAccountNumber = encryptPan(cardNumber);
                                return {
                                    country: 'UZ',
                                    issuerName: 'JSCMB Ipoteka-Bank',
                                    guid,
                                    recipientFirstName,
                                    recipientLastName,
                                    cardType,
                                    recipientPrimaryAccountNumber, // !!! this pan is encrypted !!!
                                };
                            });
        result.push(...newCards);
    }

    return result;
};