import React from 'react';
import s from './Profile.module.css';
import Posts from "./Posts/Posts";

const Profile = () => {
    return  <div className={s.content}>
        <div>
            <img src="https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82/sunset-elephants-i57923.jpg" alt=""/>
        </div>
        <div>
            avatar+discription
        </div>
        <Posts />
    </div>
};

export default Profile;