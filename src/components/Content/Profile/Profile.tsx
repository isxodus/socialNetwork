import React from "react";
// import css from "./Profile.module.css";
import {ProfileHeader} from "./ProfileInfo/ProfileHeader";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {PostMessageActionType, ProfilePageType} from "../../../redux/reduxStore";


type ProfileType = {
    data: ProfilePageType
    dispatch: (action: PostMessageActionType) => void
}

export function Profile(props: ProfileType) {
    return <div>

        <ProfileHeader data={props.data.profileInfo}/>
        <MyPostsContainer/>
        {/*<MyPostsContainer data={props.data.profilePosts}*/}
        {/*                  dispatch={props.dispatch}*/}
        {/*/>*/}

    </div>
}