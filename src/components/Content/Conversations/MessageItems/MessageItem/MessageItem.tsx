import css from "./MessageItem.module.css";
import React from "react";
import {MessageType} from "../../../../../redux/reduxStore";

type MessageItemPropsType = {
    messageItem: MessageType
}

export function MessageItem(props: MessageItemPropsType) {
    return <div className={css.messageItem}>{props.messageItem.messageText}</div>
}
