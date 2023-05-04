import {ADD_ALIAS} from "../constants/constants";

const defaultState = {
    statusAlias: null,
    issuerName: ''
}

export const aliasReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ALIAS:
            return {...state, statusAlias: action.payload.status, issuerName: action.payload.issuerName }
        default:
            return state
    }
}
