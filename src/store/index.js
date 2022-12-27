import {createStore, applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import {cardReducer} from "./cardReducer";


// connecting all reducers in one
const rootReducer = combineReducers({
    // we can import here each reducer
    // we can add as <key: value> or just name of reducer
    cardReducer,
})

export const rootStore = createStore(rootReducer, applyMiddleware());