import React from "react";
// import css from "./Profile.module.css";
import {ProfileHeader} from "./ProfileInfo/ProfileHeader";
import {MyPostsContainerWithRouter} from "./MyPosts/MyPostsContainer";
import {ProfilePageType} from "../../../redux/reduxStore";

type ProfileType = {
    data: ProfilePageType
    addPost: () => void
    onPostChangeHandler: (newText: string) => void
}


export function Profile(props: ProfileType) {

    return <div>
        <ProfileHeader data={props.data.profileInfo}/>
        <MyPostsContainerWithRouter/>
    </div>
}