import React, { Component } from 'react';
import fetchPosts from '../Actions';
import { connect } from 'react-redux';

class Posts extends Component {
    componentWillMount() {
        console.log('Posts are mounting');
        this.props.fetchPosts();
    }
    render() {
        const posts = this.props.posts.map(obj => {
            return (
                <div key={obj.title + obj.body} className='poste'>
                    <h1>{obj.title}</h1>
                    <p>{obj.body}</p>
                </div>

            )
        });
        console.log(posts)
        return (
            <React.Fragment>
                {posts}
            </React.Fragment>
        );
    }
    /* const mapStateToProps = state => ({
        posts: state.posts.items
    }); */
}

const mapStateToProps = (state) => {
    return { posts: state.posts.items }
}
export default connect(mapStateToProps, { fetchPosts })(Posts);
