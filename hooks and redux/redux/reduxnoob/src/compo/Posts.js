import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import fetchPosts from "../actions/PostActions";

import { useSelector, useDispatch } from "react-redux";




const Posts = (props) => {
    const [postItems, setPostItems] = useState([]);
    useEffect(() => {
        /*     fetch('https://jsonplaceholder.typicode.com/posts').
                then(response => response.json()).
                then(data => { setPostItems(data) }); */

    }, [])

    console.log(postItems);

    const postsf = useSelector(state => state.posts.items);

    const posts = postsf.map(post => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ))

    return (
        <div>
            <h1>Posts</h1>
            {posts}

        </div>
    )
}





export default Posts;