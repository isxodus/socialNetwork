import React from "react";
import css from "./Profile.module.css";

export function Profile() {
    return <div className={css.content}>
        <div>
            <img
                src={"https://media.istockphoto.com/photos/financial-center-picture-id507076592?k=20&m=507076592&s=612x612&w=0&h=Jmctr_haN1UyZsferwuczs624R2Q3tro_WmQifotvT4="}
                alt={"pretty image"}/>
        </div>
        <div className={css.profilePicture}>
            <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"}
                 alt={"user logo"}/>
            +descr
        </div>
        <div className={css.item}>My post</div>
        <div>Posts</div>

    </div>
}