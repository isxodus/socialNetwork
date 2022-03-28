import React from "react";
import css from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export function MyPosts() {
    return <div className={css.content}>
        <div>
            <img
                src={"https://media.istockphoto.com/photos/financial-center-picture-id507076592?k=20&m=507076592&s=612x612&w=0&h=Jmctr_haN1UyZsferwuczs624R2Q3tro_WmQifotvT4="}
                alt={"pretty image"}/>
        </div>
        <Post text={"ts rocks"}/>
        <Post text={"doing stuff"}/>
        <Post text={"i am good"}/>
        <Post text={"hello world"}/>
    </div>
}