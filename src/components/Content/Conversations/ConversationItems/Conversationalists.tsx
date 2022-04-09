import css from "../Conversations.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {ConversationalistType, ConversationType} from "../../../../myRedux/state";


type ConversationItemsType = {
    data: Array<ConversationType>
}

function ShowConversationItem(props: ConversationalistType) {
    return <div className={css.conversationItem}>
        <NavLink to={"/conversations/" + props.id}>{props.name}</NavLink>
    </div>
}

export function Conversationalists(props: ConversationItemsType) {
    return <div className={css.conversationItems}>
        {
            props.data?.map((el) => {
                return <ShowConversationItem id={el.conversationalistInfo.id}
                                             name={el.conversationalistInfo.name}

                />
            })
        }
    </div>
}