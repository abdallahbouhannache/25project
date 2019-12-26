import React, { useState } from 'react'

const PostForm = () => {
    const [Title, setTitle] = useState('');
    const [Body, setBody] = useState('');

    const handleChange = (e) => {

        e.target.name == "Title" ? setTitle(e.target.value) : setBody(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ Title, Body })
        }).then(response => response.json()).
            then(data => { console.log(data) });

    }

    return (
        <div>
            <h1> Add Post</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Title:</label>
                <br />
                <input type="text"
                    className="form-control"
                    name="Title" id="" value={Title} onChange={handleChange} />
                <br />
                <label htmlFor="">Body:</label>
                <br />
                <input type="text"
                    className="form-control"
                    name="Body" id="" value={Body} onChange={handleChange} />
                <br />
                <label htmlFor="">Body:</label>
                <br />
                <input type="submit"
                    className="form-control"
                    name="" id="" value="submit" />
            </form>
        </div>

    )
};

export default PostForm;