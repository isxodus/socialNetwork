import React, {ChangeEvent} from "react";
import {MyPosts} from "./MyPosts";
import {addPostActionCreator, onPostChangeHandlerActionCreator} from "../../../../redux/profileReducer";
import {ActionType, ProfileMyPostArrayType} from "../../../../redux/reduxStore";

type MyPostsPostPropsType = {
    data: ProfileMyPostArrayType
    dispatch: (action: ActionType) => void
}


export function MyPostsContainer(props: MyPostsPostPropsType) {

    let onAddPostHandler = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const currentValue = event.currentTarget.value
        props.dispatch(onPostChangeHandlerActionCreator(currentValue))
    }

    return <MyPosts posts={props.data.profilePosts}
                    defaultPostText={props.data.newPostText}
                    addPost={onAddPostHandler}
                    editPostTextHandler={onPostChangeHandler}/>
}