import { FETCH_POSTS, NEW_POST } from '../actions/types';



const initialState = {
    items: [],
    item: {}
};


const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            console.log('reduce');
            return {
                ...state,
                items: action.payload
            };
        /* case NEW_POST:
            return state; */
        default:
            console.log('reduce');
            return state;

    }
}






export default postReducer;


/*  */