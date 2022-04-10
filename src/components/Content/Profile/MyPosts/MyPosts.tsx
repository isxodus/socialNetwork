import React from "react";
import css from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ActionType, ProfileMyPostArrayType} from "../../../../myRedux/state";
import {addPostActionCreator, onPostChangeHandlerActionCreator} from "../../../../myRedux/profileReducer";

type MyPostsPostPropsType = {
    data: ProfileMyPostArrayType
    dispatch: (action: ActionType) => void
}


export function MyPosts(props: MyPostsPostPropsType) {
    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();
    let onAddPostHandler = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChangeHandler = () => {
        newPostElement.current && props.dispatch(onPostChangeHandlerActionCreator(newPostElement.current.value))
    }

    return <div className={css.myPosts}>
        <div>
            <textarea ref={newPostElement} onChange={onPostChangeHandler} value={props.data.newPostText}/>
            <div>
                <button onClick={onAddPostHandler}>add text</button>
            </div>
        </div>
        {props.data.profilePosts.map((el) => <Post id={el.id} text={el.text}/>)}
    </div>
}

