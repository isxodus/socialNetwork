import React, {ChangeEvent} from "react";
import css from "./Conversations.module.css";
import {Conversationalists} from "./ConversationItems/Conversationalists";
import {ChatMessages} from "./ChatMessages/ChatMessages";
import {ConversationalistType, MessageType} from "../../../redux/reduxStore";

type ConversationsPropsType = {
    conversations: Array<ConversationalistType>
    messages: Array<MessageType>
    newMessageText: string
    addMessage: () => void
    editMessageTextHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export function Conversations(props: ConversationsPropsType) {
    return <div className={css.conversations}>
        <Conversationalists data={props.conversations}/>
        {props.messages ?
            <ChatMessages messages={props.messages}
                          newMessageText={props.newMessageText}
                          addMessage={props.addMessage}
                          editMessage={props.editMessageTextHandler}/> : "0 "}

    </div>
}