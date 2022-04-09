import React from "react";
// import css from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileHeader} from "./ProfileInfo/ProfileHeader";
import {ActionType, ProfilePageType} from "../../../myRedux/state";

type ProfileType = {
    data: ProfilePageType
    dispatch: (action: ActionType) => void
}

export function Profile(props: ProfileType) {
    return <div>
        <ProfileHeader data={props.data.profileInfo}/>
        <MyPosts data={props.data.profilePosts}
                 dispatch={props.dispatch}/>
    </div>
}