import axios from "axios";

export const getCard = async (phoneNumber) => {
    console.log("get card")
    try {
        const {data} = await axios.post('http://localhost:3333/getVisaCards', {"userPhone": phoneNumber });
        if (!data) {
            throw new Error("У вас нет карт, обратитесь в банк за помощью!")
        }
        return data;
    } catch (e) {
        throw new Error("Ошибка в сервере...")
    }
};

export const getAlias = async (phoneNumber) => {
    console.log("get alias")
    try {
        const res = await axios.post('http://localhost:3333/resolve', {"alias": phoneNumber });
        if (res.status === 204) {
            return {status: res.status};
        } else {
            const {status, data: issuer} = res;
            const issuerName = issuer.data.issuerName;

            return {status, issuerName}
        }
    } catch (e) {
        console.log("error in Alias")
    }
};

export const getActualCard = async (cards, phoneNumber) => {
    console.log("getActual: ", cards)
    try {
        const guids = cards.map(card => card.guid);
        let currentCard;
        for (const element of guids) {
            try {
                const res = await axios.post('http://localhost:3333/get', {"guid": element});
                [currentCard] = cards.filter((card) => card.guid.toUpperCase() === res.data.data.guid.toUpperCase())
                return currentCard;
            } catch(e) {
                console.log('Error occurred');
            }
        }
    } catch (error) {
        console.log(error)
    }
};

export const createAlias = () => {
    console.log("create alias")
};

export const updateAlias = () => {
    console.log("update alias")
};

export const deleteAlias = () => {
    console.log("delete alias")
};