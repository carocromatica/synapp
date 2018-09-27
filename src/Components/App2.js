import React, { Component } from 'react';
import Post from '../Components/Post/Post';
import PostForm from '../Components/PostForm/PostForm';
import { DB_CONFIG } from '../Config/config';
import firebase from 'firebase';
import 'firebase/database';
import '../App.css';

class App2 extends Component {

    constructor(props){
      super(props);
      this.addPost = this.addPost.bind(this);
      this.removePost = this.removePost.bind(this);
  
      this.app = firebase.initializeApp(DB_CONFIG);
      this.database = this.app.database().ref().child('posts');
  
      // We're going to setup the React state of our component
      this.state = {
          posts: [],
      }
    }
  
    componentWillMount(){
      const previousPosts = this.state.posts;
  
      // DataSnapshot
      this.database.on('child_added', snap => {
        previousPosts.push({
          id: snap.key,
          postContent: snap.val().postContent,
        })
  
        this.setState({
          posts: previousPosts
        })
      })
  
      this.database.on('child_removed', snap => {
        for(var i=0; i < previousPosts.length; i++){
          if(previousPosts[i].id === snap.key){
            previousPosts.splice(i, 1);
          }
        }
  
        this.setState({
          posts: previousPosts
        })
      })
    }
  
    addPost(post){
      this.database.push().set({ postContent: post});
    }
  
    removePost(postId){
      console.log("from the parent: " + postId);
      this.database.child(postId).remove();
    }
    
    render() {
        return (
          <div className="postsWrapper">
            <div className="postsHeader">
              <div className="heading">React & Firebase To-Do List</div>
            </div>
            <div className="postsBody">
              {
                this.state.posts.map((post) => {
                  return (
                    <Post postContent={post.postContent} 
                    postId={post.id} 
                    key={post.id} 
                    removePost ={this.removePost}/>
                  )
                })
              }
            </div>
            <div className="postsFooter">
              <PostForm addPost={this.addPost} />
            </div>
          </div>
        );
      }
    }
    
    export default App2;
    