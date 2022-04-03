import React from "react";
import css from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfilePostArrayType} from "../../../../myRedux/state";

export function MyPosts(props: ProfilePostArrayType) {
    return <div className={css.myPosts}>
        {props.profilePostsArray.map((el) => <Post id={el.id} text={el.text}/>)}
    </div>
}