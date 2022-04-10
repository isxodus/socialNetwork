import {ActionType, ConversationsPageType} from "./reduxStore";

//
let initialReducerState: ConversationsPageType = {
    conversations: [
        {
            conversationalistInfo: {
                id: 1,
                name: "Kolya"
            },
            messageArray: [{
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
            }]
        }, {
            conversationalistInfo: {
                id: 2,
                name: "Vasya"
            },
            messageArray: [{
                id: 1,
                messageText: "wazzzup",
                messageDate: "03.03.2022",
                messageTime: "12:00:00"
            }, {
                id: 2,
                messageText: "just chilling",
                messageDate: "03.03.2022",
                messageTime: "13:00:01"
            }, {
                id: 3,
                messageText: "cool",
                messageDate: "03.03.2022",
                messageTime: "10:45:00"
            }]
        }, {
            conversationalistInfo: {
                id: 3,
                name: "Dima"
            },
            messageArray: [{
                id: 1,
                messageText: "wazup",
                messageDate: "03.03.2022",
                messageTime: "12:00:00"
            }, {
                id: 2,
                messageText: "just chilling",
                messageDate: "03.03.2022",
                messageTime: "13:00:01"
            }, {
                id: 3,
                messageText: "cool",
                messageDate: "03.03.2022",
                messageTime: "10:45:00"
            }]
        }],
    newMessageText: ''
}

//REDUCER
export const conversationsReducer = (reducerState: ConversationsPageType = initialReducerState, action: ActionType): ConversationsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            // const newMessage: ProfileMyPostType = {
            //     id: this._state.conversationsPage.conversations..profilePage.profilePosts.profilePosts.length + 1,
            //     text: this._state.profilePage.profilePosts.newPostText
            // }
            // this._state..profilePage.profilePosts.profilePosts.push(newPost)
            //создать объект
            //запушить
            reducerState.newMessageText = ''
            console.log('no')
            return reducerState
        case "CHANGE-MESSAGE-TEXT":
            reducerState.newMessageText = action.newText ? action.newText : ''
            return reducerState
        default:
            return reducerState
    }
}

//ACTION TYPE CREATORS
export const addMessageActionCreator = (): ActionType => ({type: 'ADD-MESSAGE'})
export const onMessageChangeHandlerActionCreator = (newText: string): ActionType => ({type: 'CHANGE-MESSAGE-TEXT', newText: newText})