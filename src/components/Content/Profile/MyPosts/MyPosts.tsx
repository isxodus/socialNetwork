import React from "react";
import css from "./MyPosts.module.css";
import {Post} from "./Post/Post";


export function MyPosts() {
    return <div className={css.myPosts}>
        <Post text={"ts rocks"}/>
        <Post text={"doing stuff"}/>
        <Post text={"i am good"}/>
        <Post text={"hello world"}/>
    </div>
}