import {ChangeEvent} from "react";
import {PostAndMessageActionType, StateType} from "../../../../redux/reduxStore";
import {addPost, onPostChangeHandler} from "../../../../redux/profilePageReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.profilePosts.profilePosts,
        defaultPostText: state.profilePage.profilePosts.newPostText,
    }
}


let mapDispatchToProps = (dispatch: (action: PostAndMessageActionType) => void) => {
    return {
        addPost: () => dispatch(addPost()),
        editPostTextHandler: (event: ChangeEvent<HTMLTextAreaElement>) => {
            const currentValue = event.currentTarget.value
            dispatch(onPostChangeHandler(currentValue))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


// type MyPostsPostPropsType = {
//     data: ProfileMyPostArrayType
//     dispatch: (action: ActionType) => void
// }
//
//
// export function MyPostsContainer(props: MyPostsPostPropsType) {
//
//     let onAddPostHandler = () => {
//         props.dispatch(addPostActionCreator())
//     }
//     let onPostChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
//         const currentValue = event.currentTarget.value
//         props.dispatch(onPostChangeHandlerActionCreator(currentValue))
//     }
//
//     return <MyPosts posts={props.data.profilePosts}
//                     defaultPostText={props.data.newPostText}
//                     addPost={onAddPostHandler}
//                     editPostTextHandler={onPostChangeHandler}/>
// }