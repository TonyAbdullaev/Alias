import {ADD_USERINFO, DELETE_USERINFO} from "../constants/constants";

const defaultState = {
    userName: '',
    phoneNumber: ''
}

export const userInfoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_USERINFO:
            return {...state, userName: action.payload.userName, phoneNumber: action.payload.phoneNumber }
        case DELETE_USERINFO:
            return defaultState
        default:
            return state
    }
}
