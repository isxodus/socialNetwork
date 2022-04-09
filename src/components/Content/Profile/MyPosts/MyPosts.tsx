import React from "react";
import css from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfilePostArrayType} from "../../../../myRedux/state";


export function MyPosts(props: ProfilePostArrayType) {
    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();
    let onAddPostHandler = () => {
        props.profileAddPost()
    }
    let onPostChangeHandler = () => {
        newPostElement.current && props.profileChangePostHandler(newPostElement.current.value)
    }

    return <div className={css.myPosts}>
        <div>
            <textarea ref={newPostElement} onChange={onPostChangeHandler} value={props.newPostText}/>
            <div>
                <button onClick={onAddPostHandler}>add text</button>
            </div>
        </div>
        {props.profilePostsArray.map((el) => <Post id={el.id} text={el.text}/>)}
    </div>
}

