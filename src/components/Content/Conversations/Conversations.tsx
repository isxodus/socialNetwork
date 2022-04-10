import React from "react";
import css from "./Conversations.module.css";
import {Conversationalists} from "./ConversationItems/Conversationalists";
import {MessageItems} from "./MessageItems/MessageItems";
import {ActionType, ConversationsPageType} from "../../../redux/reduxStore";

type ConversationsPropsType = {
    data: ConversationsPageType
    dispatch: (action: ActionType) => void
}

export function Conversations(props: ConversationsPropsType) {
    return <div className={css.conversations}>
        <Conversationalists data={props.data.conversations}/>
        {props.data.conversations[0].messageArray ?
            <MessageItems data={props.data.conversations}
                          newMessageText={props.data.newMessageText}
                          dispatch={props.dispatch}/> : "0 "}
    </div>
}