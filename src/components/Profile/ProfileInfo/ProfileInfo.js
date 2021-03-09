import React from 'react';
import s from './ProfileInfo.module.css';
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }else {
        return (
            <div>
                <div>
                    <img src="https://timelinecovers.pro/facebook-cover/download/spring-facebook-cover.jpg" alt=""/>
                </div>
                <div>
                    <img src={props.profile.photos.large} alt=""/>
                    avatar+discription
                </div>
            </div>
        )
    }
};

export default ProfileInfo;