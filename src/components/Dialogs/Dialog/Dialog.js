import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                <img src="http://assets.stickpng.com/images/5ecec78673e4440004f09e77.png" alt=""/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;