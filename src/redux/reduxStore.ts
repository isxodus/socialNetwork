import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {profilePageReducer, ProfilePageType} from "./profilePageReducer";
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