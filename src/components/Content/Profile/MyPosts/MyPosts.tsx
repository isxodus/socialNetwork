import React from "react";
import css from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfilePostArrayType} from "../../../../myRedux/state";


export function MyPosts(props: ProfilePostArrayType) {
    let newPostElement:React.RefObject<HTMLTextAreaElement> = React.createRef();

    return <div className={css.myPosts}>
        <div>
            <textarea
                ref={newPostElement} value={props.newPostText}></textarea>
            <div>
                <button onClick={() => props.profileAddPost(newPostElement.current?.value)}>add text</button>
            </div>
        </div>
        {props.profilePostsArray.map((el) => <Post id={el.id} text={el.text}/>)}
    </div>
}