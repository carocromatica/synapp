import React, { Component } from 'react';
//import './NoteForm.css';

class PostForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newPostContent: '',
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.writePost = this.writePost.bind(this);
    }

    // When the user input changes, set the newNoteContent
    // to the value of what's in the input box.
    handleUserInput(e){
        this.setState({
            newPostContent: e.target.value, // the value of the text input
        })
    }

    writePost(){
        // call a method that sets the noteContent for a note to
        // the value of the input
        this.props.addPost(this.state.newPostContent);

        // Set newNoteContent back to an empty string.
        this.setState({
            newPostContent: '',
        })
    }

    render(){
        return(
            <div className="formWrapper">
                <input className="postInput"
                placeholder="Write a new post..."
                value={this.state.newPostContent} 
                onChange={this.handleUserInput} />
                <button className="postButton"
                onClick={this.writePost}>Add Post</button>
            </div>
        )
    }
}

export default PostForm;

