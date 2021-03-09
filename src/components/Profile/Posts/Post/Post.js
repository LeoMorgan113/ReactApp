import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return  <div className={s.item}>
                <p>{props.message}</p>
                <span>Like {props.like_counter}</span>
                <hr/>
            </div>
};

export default Post;