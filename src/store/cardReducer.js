import {ADD_ALL_CARDS} from "../constants/constants";

const defaultState = {
    cards: [],
    statusAlias: null
}

export const cardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ALL_CARDS:
            return state
        default:
            return state
    }
}
