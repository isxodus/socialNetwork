import React from "react";
// import css from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainerWithRouter} from "./MyPosts/MyPostsContainer";
import {ProfilePageType} from "../../../redux/profilePageReducer";

type ProfileType = {
    data: ProfilePageType
    addPost: () => void
    onPostChangeHandler: (newText: string) => void
    updateUserStatusThunkCreator: (status: string) => void
}


export function Profile(props: ProfileType) {

    return <div>
        <ProfileInfo data={props.data.profileInfo} status={props.data.status} updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}/>
        <MyPostsContainerWithRouter/>
    </div>
}