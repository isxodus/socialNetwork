import {ActionType, ProfileMyPostType, ProfilePageType} from "./reduxStore";

//
let initialReducerState: ProfilePageType = {
    profileInfo: {
        imageLink: "https://media.istockphoto.com/photos/financial-center-picture-id507076592?k=20&m=507076592&s=612x612&w=0&h=Jmctr_haN1UyZsferwuczs624R2Q3tro_WmQifotvT4=",
        altText: "pretty image",
        myInfo: "something cool"
    },
    profilePosts: {
        profilePosts: [
            {
                id: 1,
                text: "ts rocks"
            }, {
                id: 2,
                text: "doing stuff!!!!!!!!!!!!!!!!"
            }, {
                id: 3,
                text: "i am good"
            }, {
                id: 4,
                text: "hello world!!!"
            }
        ],
        newPostText: 'fill something'
    }
}

//REDUCER
export const profileReducer = (reducerState: ProfilePageType = initialReducerState, action: ActionType): ProfilePageType => {
    let profileReducerCopy: ProfilePageType = {...reducerState}
    switch (action.type) {
        case 'ADD-POST':
            const newPost: ProfileMyPostType = {
                id: reducerState.profilePosts.profilePosts.length + 1,
                text: reducerState.profilePosts.newPostText
            }
            // reducerState.profilePosts.
            profileReducerCopy.profilePosts = {...reducerState.profilePosts}
            profileReducerCopy.profilePosts.profilePosts = [...reducerState.profilePosts.profilePosts]
            profileReducerCopy.profilePosts.profilePosts.push(newPost)
            profileReducerCopy.profilePosts.newPostText = 'fill another post'
            console.log(reducerState)
            return profileReducerCopy
        case 'CHANGE-POST-TEXT':
            profileReducerCopy.profilePosts = {...reducerState.profilePosts}
            profileReducerCopy.profilePosts.newPostText = action.newText ? action.newText : ''
            return profileReducerCopy
        default:
            return reducerState
    }
}

//ACTION TYPE CREATORS
export const addPostActionCreator = (): ActionType => ({type: 'ADD-POST'})
export const onPostChangeHandlerActionCreator = (newText: string): ActionType => ({type: 'CHANGE-POST-TEXT', newText: newText})