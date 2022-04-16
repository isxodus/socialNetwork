import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {conversationsReducer} from "./conversationsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    conversationsPage: conversationsReducer
})
export let store = createStore(reducers) //STORE TYPE
//my implementation could be found 10.04.2022
//those methods are created in the constructor
//     _callSubscriber: (state: StateType) => void
//     subscribe: (observer: (globalState: StateType) => void) => void
//     getState: () => StateType
//     dispatch: (action: ActionType) => void


//TYPES

//State and Action types
export type StateType = {
    profilePage: ProfilePageType
    conversationsPage: ConversationsPageType
}
export type PostMessageActionType = {
    type: "ADD-POST" | "CHANGE-POST-TEXT" | "ADD-MESSAGE" | "CHANGE-MESSAGE-TEXT"
    newText?: string
}

//Profile Page
export type ProfilePageType = {
    profileInfo: ProfileInfoType
    profilePosts: ProfileMyPostArrayType
}
export type ProfileInfoType = {
    imageLink: string
    altText: string
    myInfo: string
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
// export type ConversationType = {
//     conversationalistInfo: ConversationalistType
//     messageArray?: Array<MessageType>
// }
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

