import css from "../Conversations.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

export type ConversationItemType = {
    id: number
    name: string
}

type ConversationItemArrayPropsType = { conversationsArray: Array<ConversationItemType> }

function ConversationItem(props: ConversationItemType) {
    return <div className={css.conversationItem}>
        <NavLink to={"/conversations/" + props.id}>{props.name}</NavLink>
    </div>
}

export function ConversationItems(props: ConversationItemArrayPropsType) {
    return <div className={css.conversationItems}>
        {
            props.conversationsArray?.map((el) => {
                return <ConversationItem id={el.id} name={el.name}/>
            })
        }
    </div>
}