import {ActionType, ConversationsPageType} from "./state";

//REDUCER
export const conversationsReducer = (reducerState: ConversationsPageType, action: ActionType): ConversationsPageType => {
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