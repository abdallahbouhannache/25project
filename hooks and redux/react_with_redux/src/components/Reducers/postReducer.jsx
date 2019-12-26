import React from 'react';
import { FETCH_POSTS, NEW_POST } from "../Actions/type";

const initialState = {
    items: [],
    item: {}
};

const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return {
                ...state
            };
    }

};


export default postReducer;
