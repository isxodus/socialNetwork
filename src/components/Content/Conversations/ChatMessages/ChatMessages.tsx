import React, {ChangeEvent} from "react";
import css from "../Conversations.module.css";
import {ConversationsPageType, MessageType} from "../../../../redux/reduxStore";
import {ChatMessage} from "./ChatMessage/ChatMessage"

export type MessagesPropsType = {
    messages: Array<MessageType>
    newMessageText: ConversationsPageType["newMessageText"]
    addMessage: () => void
    editMessage: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export function ChatMessages(props: MessagesPropsType) {
    return <div className={css.messageItems}>
        {
            props.messages.map((el) => {
                return <ChatMessage messageItem={el}/>
            })
        }
        <div>
            <textarea onChange={props.editMessage} value={props.newMessageText} placeholder={'add something'}/>
            <div>
                <button onClick={props.addMessage}>add text</button>
            </div>
        </div>
    </div>
}