import React, {ChangeEvent} from "react";
import css from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {UniversalInputArea} from "../../../../componentsUniversal/UniversalInputArea/UniversalInputArea";
import {ProfileMyPostArrayType, ProfileMyPostType} from "../../../../redux/profilePageReducer";

type MyPostsPostPropsType = {
    posts: Array<ProfileMyPostType>
    defaultPostText: ProfileMyPostArrayType["newPostText"]
    addPost: () => void
    editPostTextHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void
    addNewPost: (text: string) => void
}

export function MyPosts(props: MyPostsPostPropsType) {
    return <div className={css.myPosts}>
        <div>
            <UniversalInputArea type={'input'} onEntityFunction={props.addNewPost} addButtonText={"superAdd"}
                                placeholder={"standard phrase"}/>
            <UniversalInputArea type={'textarea'} onEntityFunction={props.addNewPost}
                                placeholders={['type smth cool', 'this app rocks', 'try new post']}/>
            <div>
                <button onClick={props.addPost}>add text</button>
            </div>
        </div>
        {props.posts.map((el) => <Post key={el.id} id={el.id} text={el.text}/>)}
    </div>
}

