import axios from "axios";

// async function getCards(phoneNumber) {
//     const {data} = await axios.post('http://localhost:3333/getVisaCards', {"userPhone": phoneNumber });
//     return data;
// }
//
// async function getAliasStatus(phoneNumber) {
//     try {
//         const {status, data: aliasInfo } = await axios.post('http://localhost:3333/resolve', {"alias": phoneNumber });
//         const issuerName = aliasInfo.data.issuerName;
//         return {status, issuerName};
//     } catch (error) {
//         alert(error)
//     }
// }