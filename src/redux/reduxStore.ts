import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {conversationsPageReducer} from "./conversationsPageReducer";
import {usersPageReducer} from "./usersReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    conversationsPage: conversationsPageReducer,
    usersPage: usersPageReducer
})
export let store = createStore(reducers) //STORE TYPE
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
}
//ACTION TYPES
export type PostAndMessageActionType = {
    type: "ADD-POST" | "CHANGE-POST-TEXT" | "ADD-MESSAGE" | "CHANGE-MESSAGE-TEXT" | 'SET-PROFILE'
    newText?: string
    profileInfo?: ProfileInfoType
}
export type UsersPageActionType = {
    type: 'TOGGLE_FOLLOW' | "SET_USERS" | "SET_TOTAL_USERS_COUNT" | "SET_CURRENT_PAGE" | 'TOGGLE_IS_FETCHING'
    userId?: string
    users?: Array<UserType>
    totalUsersCount?: number
    currentPage?: number
    isFetching?: boolean
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

//USERS PAGES
export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type UserType = {
    id: string
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type PhotosType = {
    large: string
    small: string
}