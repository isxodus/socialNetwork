import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk"
import {profilePageReducer} from "./profilePageReducer";
import {conversationsPageReducer} from "./conversationsPageReducer";
import {usersPageReducer, UsersPageType} from "./usersReducer";
import {authReducer, AuthStateType} from "./authReducer";


let reducers = combineReducers({
    auth: authReducer,
    profilePage: profilePageReducer,
    conversationsPage: conversationsPageReducer,
    usersPage: usersPageReducer
})
export let store = createStore(reducers, applyMiddleware(thunkMiddleware)) //STORE TYPE
//my implementation could be found 10.04.2022
//those methods are created in the constructor
//     _callSubscriber: (state: StateType) => void
//     subscribe: (observer: (globalState: StateType) => void) => void
//     getState: () => StateType
//     dispatch: (action: ActionType) => void


//TYPES

//STATE
export type StateType = {
    profilePage: ProfilePageType
    conversationsPage: ConversationsPageType
    usersPage: UsersPageType
    auth: AuthStateType
}
//ACTION TYPES
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

//Conversation types
export type ConversationsPageType = {
    conversations: Array<ConversationalistType>
    messages: Array<MessageType>
    newMessageText: string
}
export type ConversationalistType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    messageText: string
    messageDate: string
    messageTime: string
}


//@ts-ignore
window.store = store