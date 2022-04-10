import {ActionType, ProfileMyPostType, ProfilePageType} from "./state";

//REDUCER
export const profileReducer = (reducerState: ProfilePageType, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: ProfileMyPostType = {
                id: reducerState.profilePosts.profilePosts.length + 1,
                text: reducerState.profilePosts.newPostText
            }
            reducerState.profilePosts.profilePosts.push(newPost)
            reducerState.profilePosts.newPostText = 'fill another post'
            return reducerState
        case 'CHANGE-POST-TEXT':
            reducerState.profilePosts.newPostText = action.newText ? action.newText : ''
            return reducerState
        default:
            return reducerState
    }
}

//ACTION TYPE CREATORS
export const addPostActionCreator = (): ActionType => ({type: 'ADD-POST'})
export const onPostChangeHandlerActionCreator = (newText: string): ActionType => ({type: 'CHANGE-POST-TEXT', newText: newText})