import {ConversationsPageType, MessageType} from "./reduxStore";
import {PostAndMessageActionType} from "./profilePageReducer";

// STATE
let initialReducerState: ConversationsPageType = {
    conversations: [{
        id: 1,
        name: "Kolya"
    }, {
        id: 2,
        name: "Vasya"
    }, {
        id: 3,
        name: "Dima"
    }],
    messages: [{
        id: 1,
        messageText: "hi",
        messageDate: "03.03.2022",
        messageTime: "10:00:00",
    }, {
        id: 2,
        messageText: "hello",
        messageDate: "03.03.2022",
        messageTime: "10:00:01"
    }, {
        id: 3,
        messageText: "how are you doing",
        messageDate: "03.03.2022",
        messageTime: "10:05:00"
    }, {
        id: 4,
        messageText: "im good",
        messageDate: "03.03.2022",
        messageTime: "10:15:00"
    }],
    newMessageText: ''
}

//REDUCER
export const conversationsPageReducer = (reducerState: ConversationsPageType = initialReducerState, action: PostAndMessageActionType): ConversationsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage: MessageType = {id: Math.random(), messageText: reducerState.newMessageText, messageDate: '', messageTime: ''}
            return {...reducerState, messages: [...reducerState.messages, newMessage], newMessageText: ''}
        case "CHANGE-MESSAGE-TEXT":
            return {...reducerState, newMessageText: action.newText ? action.newText : ''}
        default:
            return reducerState
    }
}

//ACTION TYPE CREATORS
export const addMessageActionCreator = (): PostAndMessageActionType => ({type: 'ADD-MESSAGE'})
export const onMessageChangeHandlerActionCreator = (newText: string): PostAndMessageActionType => ({type: 'CHANGE-MESSAGE-TEXT', newText: newText})