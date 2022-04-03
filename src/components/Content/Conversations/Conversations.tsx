import React from "react";
import css from "./Conversations.module.css";
import {MessageItems, MessageItemType} from "./MessageItems/MessageItems";
import {ConversationItems, ConversationItemType} from "./ConversationItems/ConversationItems";

export type ConversationType = {
    userInfo: ConversationItemType
    messageArray?: Array<MessageItemType>
}

export type ConversationArrayPropsType = { conversationItemArray: Array<ConversationType> }

function getUserInfo(arr: Array<any>) {
    return arr.map((el, ind) => el.userInfo)
}

export function Conversations(props: ConversationArrayPropsType) {
    return <div className={css.conversations}>
        <ConversationItems conversationsArray={getUserInfo(props.conversationItemArray)}/>
        {props.conversationItemArray[0].messageArray ?
            <MessageItems messagesItemArray={props.conversationItemArray[0].messageArray}/> : "0 "}
    </div>
}