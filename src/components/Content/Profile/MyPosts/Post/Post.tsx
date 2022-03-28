import React from "react";
import css from "./Post.module.css";

type postProps = {
    text: string
}

export function Post(props: postProps) {
    return <div className={css.post}>
        <img src={"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"}
             alt={"user logo"}/>
        {props.text}
    </div>
}