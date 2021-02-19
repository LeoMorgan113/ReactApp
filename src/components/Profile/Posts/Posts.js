import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {
    return  (
        <div>
            My posts
            <div>
                <textarea cols="30" rows="10"></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how a u?' like_counter='20'/>
                <Post message='Look! I`m on TV, mom.' like_counter='30'/>
                <Post />
            </div>
        </div>
    );
};

export default Posts;