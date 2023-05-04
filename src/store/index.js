import {createStore, applyMiddleware, combineReducers} from "redux";
import {cardsReducer, currentCardReducer} from "./cardReducer";
import {aliasReducer} from "./aliasReducer";
import {userInfoReducer} from "./userInfomation";


// connecting all reducers in one
const rootReducer = combineReducers({
    // we can import here each reducer
    // we can add as <key: value> or just name of reducer
    cards: cardsReducer,
    statusAlias: aliasReducer,
    userInfo: userInfoReducer,
    currentCard: currentCardReducer,
})

export const rootStore = createStore(rootReducer, applyMiddleware());