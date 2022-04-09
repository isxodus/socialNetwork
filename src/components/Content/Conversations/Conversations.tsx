import React from "react";
import css from "./Conversations.module.css";
import {ConversationsPageType} from "../../../myRedux/state";
import {Conversationalists} from "./ConversationItems/Conversationalists";
import {MessageItems} from "./MessageItems/MessageItems";

type ConversationsType = {
    data: ConversationsPageType
}

export function Conversations(props: ConversationsType) {
    return <div className={css.conversations}>
        <Conversationalists data={props.data.conversations}/>
        {props.data.conversations[0].messageArray ? <MessageItems data={props.data.conversations[0].messageArray}/> : "0 "}
    </div>
}