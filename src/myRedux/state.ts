//profile info types
export type ProfileInfoType = {
    imageLink: string
    altText: string
    myInfo: string
}
export type ProfilePostType = {
    id: number
    text: string
}
export type ProfilePostArrayType = {
    profilePostsArray: Array<ProfilePostType>
}
export type ProfilePageType = {
    profileInfo: ProfileInfoType
    profilePosts: ProfilePostArrayType
}
//conversation types
export type ConversationalistInfoType = {
    id: number
    name: string
}
export type MessageItemType = {
    id: number
    messageText: string
    messageDate: string
    messageTime: string
}
export type ConversationInfoType = {
    conversationalistInfo: ConversationalistInfoType
    messageArray?: Array<MessageItemType>
}
//global state
export type StateType = {
    profilePage: ProfilePageType
    conversationsGlobalInfo: Array<ConversationInfoType>
}

export let state: StateType = {
    profilePage: {
        profileInfo: {
            imageLink: "https://media.istockphoto.com/photos/financial-center-picture-id507076592?k=20&m=507076592&s=612x612&w=0&h=Jmctr_haN1UyZsferwuczs624R2Q3tro_WmQifotvT4=",
            altText: "pretty image",
            myInfo: "something cool"
        },
        profilePosts: {
            profilePostsArray: [
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
            ]
        }
    },
    conversationsGlobalInfo: [
        {
            conversationalistInfo: {
                id: 1,
                name: "Kolay"
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
}