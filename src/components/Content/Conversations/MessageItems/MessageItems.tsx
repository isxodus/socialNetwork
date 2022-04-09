import css from "../Conversations.module.css";
import React from "react";
import {MessageType} from "../../../../myRedux/state";


export type MessageItemArrayPropsType = { data: Array<MessageType> }

function MessageItem(props: MessageType) {
    return <div className={css.messageItem}>{props.messageText}</div>
}

export function MessageItems(props: MessageItemArrayPropsType) {
    return <div className={css.messageItems}>
        {
            props.data.map((el) => {
                return <MessageItem id={el.id}
                                    messageText={el.messageText}
                                    messageDate={el.messageDate}
                                    messageTime={el.messageTime}/>
            })
        }
    </div>
}