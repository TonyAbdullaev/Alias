import {ADD_ALL_CARDS, ADD_CARD, DELETE_CARD} from "../constants/constants";

const defaultState = {
    card: []
}

export const cardsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ALL_CARDS:
            return {...state, card: action.payload}
        default:
            return state
    }
}

export const currentCardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return {...state, card: action.payload}
        case DELETE_CARD:
            return defaultState
        default:
            return state
    }
}
