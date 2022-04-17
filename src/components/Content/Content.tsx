import React from "react";
import {Route, Routes} from 'react-router-dom';
// import css from "./Content.module.css";
import {Profile} from "./Profile/Profile";
import {PostAndMessageActionType, StateType} from "../../redux/reduxStore";
import {ConversationsContainer} from "./Conversations/ConversationsContainer";
import {UsersContainer} from "./Users/UsersContainer";

type ContentType = {
    data: StateType
    dispatch: (action: PostAndMessageActionType) => void
}

export function Content(props: ContentType) {
    return <div>
        <Routes>
            <Route path="/" element={<Profile data={props.data.profilePage}
                                              dispatch={props.dispatch}/>}/>
            <Route path="/profile/*"
                   element={<Profile data={props.data.profilePage}
                                     dispatch={props.dispatch}/>}/>
            <Route path="/conversations/*"
                   element={<ConversationsContainer/>}/>
            <Route path="/users/*"
                   element={<UsersContainer/>}/>
        </Routes>
    </div>
}