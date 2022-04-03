import React from "react";
import {Routes, Route} from 'react-router-dom';
import css from "./Content.module.css";
import {Profile} from "./Profile/Profile";
import {Conversations, ConversationType} from "./Conversations/Conversations";

const incomingConversationArray: Array<ConversationType> = [{
    userInfo: {
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
    userInfo: {
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
    userInfo: {
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


export function Content() {
    return <div>
        <Routes>
            <Route path="/" element={<Profile/>}/>
            <Route path="/profile/*" element={<Profile/>}/>
            <Route path="/conversations/*"
                   element={<Conversations conversationItemArray={incomingConversationArray}/>}/>
        </Routes>
    </div>
}