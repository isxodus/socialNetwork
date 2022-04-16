import css from "./ChatMessage.module.css";
import React from "react";
import {MessageType} from "../../../../../redux/reduxStore";

type MessageItemPropsType = {
    messageItem: MessageType
}

export function ChatMessage(props: MessageItemPropsType) {
    return <div className={css.message}>{props.messageItem.messageText}</div>
}
