import css from "../Conversations.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {ConversationalistType} from "../../../../redux/reduxStore";


type ConversationItemsType = {
    data: Array<ConversationalistType>
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
                return <ShowConversationItem id={el.id}
                                             name={el.name}

                />
            })
        }
    </div>
}