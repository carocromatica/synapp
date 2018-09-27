import React, { Component } from 'react';
//import './Note.css';
import PropTypes from 'prop-types';

class Post extends Component{

    constructor(props){
        super(props);
        this.postContent = props.postContent; 
        this.postId = props.postId; 
        this.handleRemovePost = this.handleRemovePost.bind(this);
    }

    handleRemovePost(id){
        this.props.removePost(id);
    }

    render(){
        return(
            <div className="post fade-in">
                <span className="closebtn" 
                      onClick={() => this.handleRemovePost(this.postId)}>
                      &times;
                </span>
                <p className="postContent">{ this.postContent }</p>
            </div>
        )
    }
}

Post.propTypes = {
    postContent: PropTypes.string
}

export default Post;
