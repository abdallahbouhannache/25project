import React from 'react';
import { FETCH_POSTS, NEW_POST } from "./type";



const fetchPosts = () => dispatch => {
    console.log('fetching ....');
    fetch('https://jsonplaceholder.typicode.com/posts').
        then(respon => respon.json()).
        then(data =>
            dispatch({
                type: FETCH_POSTS,
                payload: data
            }));
};


export default fetchPosts;
