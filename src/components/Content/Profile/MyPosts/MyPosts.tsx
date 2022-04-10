import React, {ChangeEvent} from "react";
import css from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfileMyPostArrayType, ProfileMyPostType} from "../../../../myRedux/state";

type MyPostsPostPropsType = {
    posts: Array<ProfileMyPostType>
    defaultPostText: ProfileMyPostArrayType["newPostText"]
    addPost: () => void
    editPostTextHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export function MyPosts(props: MyPostsPostPropsType) {
    // let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();
    // const onChange = () => {
    //     const currentValue: string= newPostElement.current ? newPostElement.current.value : ''
    //     props.editPostTextHandler(newPostElement.currenturrentValue)
    // }

    return <div className={css.myPosts}>
        <div>
            <textarea onChange={props.editPostTextHandler}
                      value={props.defaultPostText}/>
            <div>
                <button onClick={props.addPost}>add text</button>
            </div>
        </div>
        {props.posts.map((el) => <Post id={el.id} text={el.text}/>)}
    </div>
}

