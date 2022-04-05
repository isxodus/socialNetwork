import React from "react";
import css from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../../myRedux/state";

export function Profile(props: ProfilePageType) {
    return <div>
        <ProfileInfo imageLink={props.profileInfo.imageLink} altText={props.profileInfo.altText}
                     myInfo={props.profileInfo.myInfo}/>
        <MyPosts profilePostsArray={props.profilePosts.profilePostsArray} profileAddPost={props.profilePosts.profileAddPost}
        newPostText={props.profilePosts.newPostText}/>
    </div>
}