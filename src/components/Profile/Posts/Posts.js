import React from 'react';
import '../../../App.css'
import s from './Posts.module.css';
import Post from "./Post/Post";


const Posts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} like_counter={p.likeCounter}/>)

    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return  (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea cols="30" rows="10"
                              onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ onAddPost} className='btn'>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
};

export default Posts;