import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return  <div className={s.item}>
                <img src="http://assets.stickpng.com/images/5ecec78673e4440004f09e77.png" alt=""/>
                <p>{props.message}</p>
                <span>Like {props.like_counter}</span>
            </div>
};

export default Post;