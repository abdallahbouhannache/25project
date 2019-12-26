import { combineReducers } from 'redux';
import postReducer from './postReducer';

const initialState = {
    items: [],
    item: {}
};

const secondReducer = (state = initialState, action) => {
    return { ...state, items: "data" }
}



const reducersFun = combineReducers({
    posts: postReducer,
    second: secondReducer
});

export default reducersFun;


