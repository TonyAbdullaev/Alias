import axios from "axios";

export const fetchCustomers = (phoneNumber) => {
    //get dispatch as param
    return async function (dispatch) {
        const {data} = await axios.post('http://localhost:3333/getVisaCards', {"userPhone": phoneNumber });
        const {status} = await axios.post('http://localhost:3333/resolve', {"alias": phoneNumber });
        const guid = data.map(item => item.guid);
        // dispatch();
        console.log("ASBT: ", data);
        console.log("Alias: ", status);
        console.log("GUID: ", guid);
    }
}