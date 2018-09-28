import React from 'react';
import App2 from '../Components/App2';
//import {  NavLink, } from "react-router-dom";
import IconNav from '../Components/Navs/IconNav';
import Post from '../Components/Post/Post';
import PostForm from '../Components/PostForm/PostForm';
 
const Home = () => (
  <div className="Container">

 

<div>

 <IconNav/>
    <h2>HOLA SOY COMENTARIOS</h2>
    <App2 />
    <Post />
    <PostForm />
  </div>
  </div>
)

export default Home; 