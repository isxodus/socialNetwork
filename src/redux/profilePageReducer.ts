import {PostAndMessageActionType, ProfileInfoType, ProfileMyPostType, ProfilePageType} from "./reduxStore";

// STATE
let initialReducerState: ProfilePageType = {
    profileInfo: {
        aboutMe: "я круто чувак 1001%",
        contacts: {
            facebook: "facebook.com",
            website: null,
            vk: "vk.com/dimych",
            twitter: "https://twitter.com/@sdf",
            instagram: "instagra.com/sds",
            youtube: null,
            github: "github.com",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: "samurai dimych",
        userId: 2,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        },
    },
    currentProfile: 2,

    profilePosts: {
        profilePosts: [
            // {
            //     id: 1,
            //     text: "ts rocks"
            // }, {
            //     id: 2,
            //     text: "doing stuff!!!!!!!!!!!!!!!!"
            // }, {
            //     id: 3,
            //     text: "i am good"
            // }, {
            //     id: 4,
            //     text: "hello world!!!"
            // }
        ],
        newPostText: 'fill something'
    }
}

//REDUCER
export const profilePageReducer = (reducerState: ProfilePageType = initialReducerState, action: PostAndMessageActionType): ProfilePageType => {
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
        case 'SET-PROFILE':
            // console.log('got into set profile in reducer')
            // console.log(action.profileInfo)
            return {
                ...reducerState,
                profileInfo: action.profileInfo ? action.profileInfo : reducerState.profileInfo
            }
        default:
            return reducerState
    }
}

//ACTION TYPE CREATORS
export const addPost = (): PostAndMessageActionType => ({type: 'ADD-POST'})
export const onPostChangeHandler = (newText: string): PostAndMessageActionType => ({type: 'CHANGE-POST-TEXT', newText: newText})
export const setProfile = (profileInfo: ProfileInfoType): PostAndMessageActionType => ({type: 'SET-PROFILE', profileInfo: profileInfo})
