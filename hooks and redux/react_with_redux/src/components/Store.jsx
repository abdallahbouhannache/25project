import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/combineReducers';




const middelware = [thunk];
const intitialState = {

};
const Store = createStore(rootReducer,
    intitialState,
    applyMiddleware(...middelware));


export default Store;
