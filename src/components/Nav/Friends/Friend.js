import React from 'react';
import s from './Friends.module.css';

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <img src="http://assets.stickpng.com/images/5ecec78673e4440004f09e77.png" alt=""/>
            <br/>{props.name}
        </div>
    )
};

export default Friend;