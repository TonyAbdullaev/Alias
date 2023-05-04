// ROUTES
export const HOME_ROUTE ='/home';
export const LOGIN_ROUTE ='/login';
export const SETTINGS_ROUTE ='/settings/';
export const STATUS_ROUTE ='/status';
export const CONFIRM_ROUTE ='/confirm';
export const ERROR_ROUTE ='*';
// API
export const API_URL = 'http://localhost:3333/';
// ACTION TYPE IN REDUCER
export const ADD_ALL_CARDS = "GET_ALL_CARDS";
export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const CHOOSE_CARD = "CHOOSE_CARD";
export const ADD_ALIAS = "CREATE_ALIAS";
export const UPDATE_ALIAS = "UPDATE_ALIAS";
export const DELETE_ALIAS = "DELETE_ALIAS";
export const ADD_USERINFO = "ADD_USERINFO";
export const DELETE_USERINFO = "DELETE_USERINFO";
// ACTIONS
export const addAllCards = (payload) => ({type: ADD_ALL_CARDS, payload});
export const addCurrentCard = (payload) => ({type: ADD_CARD, payload});
export const chooseCard = (payload) => ({type: CHOOSE_CARD, payload});
export const addAlias = (payload) => ({type: ADD_ALIAS, payload});
export const updateAlias = (payload) => ({type: UPDATE_ALIAS, payload});
export const deleteAlias = (payload) => ({type: DELETE_ALIAS, payload});
export const addUserInfo = (payload) => ({type: ADD_USERINFO, payload});
export const deleteUserInfo = (payload) => ({type: DELETE_USERINFO, payload});
//CONSTANTS
export const ipotekaIssuerName = "JSCMB Ipoteka-Bank";
