import css from "../Conversations.module.css";
import React from "react";
import {MessageItemType} from "../../../../myRedux/state";


export type MessageItemArrayPropsType = { messagesItemArray: Array<MessageItemType> }

function MessageItem(props: MessageItemType) {
    return <div className={css.messageItem}>{props.messageText}</div>
}

export function MessageItems(props: MessageItemArrayPropsType) {
    return <div className={css.messageItems}>
        {
            props.messagesItemArray.map((el) => {
                return <MessageItem id={el.id} messageText={el.messageText} messageDate={el.messageDate}
                                    messageTime={el.messageTime}/>
            })
        }
    </div>
}