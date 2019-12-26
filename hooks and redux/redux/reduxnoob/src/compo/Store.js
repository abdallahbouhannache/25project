import React from 'react';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';



const initialState = {

};


const middleware = [thunk];

const Store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware));


export default Store;
