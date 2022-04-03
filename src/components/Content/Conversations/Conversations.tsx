import React from "react";
import css from "./Conversations.module.css";
import {ConversationInfoType} from "../../../myRedux/state";
import {ConversationItems} from "./ConversationItems/ConversationItems";
import {MessageItems} from "./MessageItems/MessageItems";

type ConversationArrayPropsType = { conversationsArray: Array<ConversationInfoType> }

function getUserInfo(arr: Array<ConversationInfoType>) {
    console.log(arr)
    return arr.map((el) => el.conversationalistInfo)
}

export function Conversations(props: ConversationArrayPropsType) {
    return <div className={css.conversations}>
        <ConversationItems conversationsArray={getUserInfo(props.conversationsArray)}/>
        {props.conversationsArray[0].messageArray ?
            <MessageItems messagesItemArray={props.conversationsArray[0].messageArray}/> : "0 "}
    </div>
}