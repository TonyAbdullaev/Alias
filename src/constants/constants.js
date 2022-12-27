// ROUTES
export const LOGIN_ROUTE ='/login';
export const HOME_ROUTE ='/';
export const SETTINGS_ROUTE ='/settings';
export const STATUS_ROUTE ='/status';
// API
export const API_URL = 'http://localhost:3333/';
// ACTION TYPE IN REDUCER
export const ADD_ALL_CARDS = "GET_ALL_CARDS";
export const CHOOSE_CARD = "CHOOSE_CARD";
export const ADD_ALIAS = "CREATE_ALIAS";
export const UPDATE_ALIAS = "UPDATE_ALIAS";
export const DELETE_ALIAS = "DELETE_ALIAS";
// ACTIONS
export const addAllCards = (payload) => ({type: ADD_ALL_CARDS, payload});
export const chooseCard = (payload) => ({type: CHOOSE_CARD, payload});
export const addAlias = (payload) => ({type: ADD_ALIAS, payload});
export const updateAlias = (payload) => ({type: UPDATE_ALIAS, payload});
export const deleteAlias = (payload) => ({type: UPDATE_ALIAS, payload});
