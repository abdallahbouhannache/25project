import React from 'react';
import { combineReducers } from 'redux';
import postReducer from './postReducer';



combineReducers({
    posts: postReducer

});

export default combineReducers;
