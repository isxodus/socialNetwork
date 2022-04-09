//TYPES
//profile info types
export type ProfileInfoType = {
    imageLink: string
    altText: string
    myInfo: string
}
export type ProfileMyPostType = {
    id: number
    text: string
}
export type ProfileMyPostArrayType = {
    profilePosts: Array<ProfileMyPostType>
    newPostText: string
    // profileAddPost: () => void
    // profileChangePostHandler: (editedText: string) => void
}
export type ProfilePageType = {
    profileInfo: ProfileInfoType
    profilePosts: ProfileMyPostArrayType
} //type for Profile Component
//conversation types
export type MessageType = {
    id: number
    messageText: string
    messageDate: string
    messageTime: string
}
export type ConversationalistType = {
    id: number
    name: string
}
export type ConversationType = {
    conversationalistInfo: ConversationalistType
    messageArray?: Array<MessageType>
}
export type ConversationsPageType = {
    conversations: Array<ConversationType>
}
//global state type
export type StateType = {
    profilePage: ProfilePageType
    conversationsPage: ConversationsPageType
}

//STORE
export type ActionType = {
    type: string
    newText?: string
}
export type GlobalStoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (globalState: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}
export let store: GlobalStoreType = {
    _state: {
        profilePage: {
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
        },
        conversationsPage: {
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
                }]
        },

    },
    _callSubscriber() {
    },
    subscribe(observer: (globalState: StateType) => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: ProfileMyPostType = {
                id: this._state.profilePage.profilePosts.profilePosts.length + 1,
                text: this._state.profilePage.profilePosts.newPostText
            }
            this._state.profilePage.profilePosts.profilePosts.push(newPost)
            this._state.profilePage.profilePosts.newPostText = 'fill another post'
            this._callSubscriber(this._state)
        } else if (action.type === 'CHANGE-POST-TEXT') {
            this._state.profilePage.profilePosts.newPostText = action.newText ? action.newText : ''
            this._callSubscriber(this._state)
        }
    }
}