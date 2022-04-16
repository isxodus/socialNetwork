import {PostMessageActionType, ProfileMyPostType, ProfilePageType} from "./reduxStore";

// STATE
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
export const profileReducer = (reducerState: ProfilePageType = initialReducerState, action: PostMessageActionType): ProfilePageType => {
    let reducerStateCopy: ProfilePageType = {...reducerState}
    switch (action.type) {
        case 'ADD-POST':
            const newPost: ProfileMyPostType = {
                id: reducerState.profilePosts.profilePosts.length + 1,
                text: reducerState.profilePosts.newPostText
            }
            // reducerState.profilePosts.
            reducerStateCopy.profilePosts = {...reducerState.profilePosts}
            reducerStateCopy.profilePosts.profilePosts = [...reducerState.profilePosts.profilePosts]
            reducerStateCopy.profilePosts.profilePosts.push(newPost)
            reducerStateCopy.profilePosts.newPostText = 'fill another post'
            console.log(reducerState)
            return reducerStateCopy
        case 'CHANGE-POST-TEXT':
            reducerStateCopy.profilePosts = {...reducerState.profilePosts}
            reducerStateCopy.profilePosts.newPostText = action.newText ? action.newText : ''
            return reducerStateCopy
        default:
            return reducerState
    }
}

//ACTION TYPE CREATORS
export const addPostActionCreator = (): PostMessageActionType => ({type: 'ADD-POST'})
export const onPostChangeHandlerActionCreator = (newText: string): PostMessageActionType => ({type: 'CHANGE-POST-TEXT', newText: newText})