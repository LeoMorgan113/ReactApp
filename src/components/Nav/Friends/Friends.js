import React from 'react';
import s from './Friends.module.css';
import Friend from "./Friend";

const Friends = (props) => {
    let friends = props.friends.map( n => <Friend name={n.name}/>)
    return (
        <div>
            <h3>Friends</h3>
            {
                friends
            }
        </div>
    )
};

export default Friends;