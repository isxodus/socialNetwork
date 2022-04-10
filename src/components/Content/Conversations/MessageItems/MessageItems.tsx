import css from "../Conversations.module.css";
import React from "react";
import {MessageItem} from "./MessageItem/MessageItem";
import {addMessageActionCreator, onMessageChangeHandlerActionCreator} from "../../../../redux/conversationsReducer";
import {ActionType, ConversationsPageType, ConversationType} from "../../../../redux/reduxStore";

export type MessageItemsPropsType = {
    data: Array<ConversationType>
    newMessageText: ConversationsPageType["newMessageText"]
    dispatch: (action: ActionType) => void
}

export function MessageItems(props: MessageItemsPropsType) {
    let newMessageElement: React.RefObject<HTMLTextAreaElement> = React.createRef();
    let onAddPostHandler = () => {
        props.dispatch(addMessageActionCreator())
    }
    let onPostChangeHandler = () => {
        newMessageElement.current && props.dispatch(onMessageChangeHandlerActionCreator(newMessageElement.current.value))
    }

    return <div className={css.messageItems}>
        {
            props.data[0]?.messageArray?.map((el) => {
                return <MessageItem messageItem={el}/>
            })

        }
        <div>
            <textarea ref={newMessageElement} onChange={onPostChangeHandler} value={props.newMessageText} placeholder={'add something'}/>
            <div>
                <button onClick={onAddPostHandler}>add text</button>
            </div>
        </div>
    </div>
}