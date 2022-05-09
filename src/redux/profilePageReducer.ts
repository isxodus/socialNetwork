//TODO REFACTOR
//ACTION TYPES
import {profileAPI} from "../api/api";

export type PostAndMessageActionType = {
    type: "ADD-POST" | 'ADD-POST2' | "CHANGE-POST-TEXT" | "ADD-MESSAGE" | "CHANGE-MESSAGE-TEXT" | 'SET-PROFILE'
    addPostText?: string
    newText?: string
    profileInfo?: ProfileInfoType
}
//Profile Page
export type ProfilePageType = {
    profileInfo: ProfileInfoType
    currentProfile: number
    status: string
    profilePosts: ProfileMyPostArrayType
}
export type ProfileInfoType = {
    aboutMe: string | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number | null
    contacts: ProfileContactsType
    photos: ProfilePhotosType
}
export type ProfileContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
export type ProfilePhotosType = {
    small: string | null
    large: string | null
}
export type ProfileMyPostArrayType = {
    profilePosts: Array<ProfileMyPostType>
    newPostText: string
    // profileAddPost: () => void
    // profileChangePostHandler: (editedText: string) => void
}
export type ProfileMyPostType = {
    id: number
    text: string
}

//ACTION TYPES
type SetStatusType = {
    type: 'SET-STATUS'
    status: string
}

//FINAL ACTION TYPE
type ActionType = SetStatusType | PostAndMessageActionType


//INITIAL STATE
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
    status: 'initial status',
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
export const profilePageReducer = (reducerState: ProfilePageType = initialReducerState, action: ActionType): ProfilePageType => {

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
        case 'ADD-POST2':
            const newPost2: ProfileMyPostType = {
                id: reducerState.profilePosts.profilePosts.length + 1,
                text: action.addPostText ? action.addPostText : ''
            }
            // reducerState.profilePosts.
            reducerStateCopy.profilePosts = {...reducerState.profilePosts}
            reducerStateCopy.profilePosts.profilePosts = [...reducerState.profilePosts.profilePosts]
            reducerStateCopy.profilePosts.profilePosts.push(newPost2)
            reducerStateCopy.profilePosts.newPostText = 'fill another post'
            console.log(reducerState)
            return reducerStateCopy
        case 'CHANGE-POST-TEXT':
            reducerStateCopy.profilePosts = {...reducerState.profilePosts}
            reducerStateCopy.profilePosts.newPostText = action.newText ? action.newText : ''
            return reducerStateCopy
        case 'SET-PROFILE':
            return {
                ...reducerState,
                profileInfo: action.profileInfo ? action.profileInfo : reducerState.profileInfo
            }

        case 'SET-STATUS':
            return {
                ...reducerState, status: action.status
            }
        default:
            return reducerState
    }
}

//ACTION TYPE CREATORS
export const addPost = (): PostAndMessageActionType => ({type: 'ADD-POST'})
export const addPost2 = (text: string): PostAndMessageActionType => ({type: 'ADD-POST2', addPostText: text})
export const onPostChangeHandler = (newText: string): PostAndMessageActionType => ({type: 'CHANGE-POST-TEXT', newText: newText})
//replaced by thunks
const setProfile = (profileInfo: ProfileInfoType): PostAndMessageActionType => ({type: 'SET-PROFILE', profileInfo: profileInfo})
const setStatus = (status: string): SetStatusType => ({type: 'SET-STATUS', status: status})


//THUNK CREATORS
export const getProfileThunkCreator = (userId: string) => {
    return (dispatch: (actionCreator: ActionType) => void) => {
        profileAPI.getProfile(userId).then(data =>
            dispatch(setProfile(data))
        )
    }
}
export const getUserStatusThunkCreator = (userId: string) => {
    return (dispatch: (actionCreator: ActionType) => void) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data))
        })
    }
}
export const updateUserStatusThunkCreator = (status: string) => {
    return (dispatch: (actionCreator: ActionType) => void) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) dispatch(setStatus(status))
        })
    }
}
