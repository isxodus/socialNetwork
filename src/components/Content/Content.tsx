import React from "react";
import {Route, Routes} from 'react-router-dom';
// import css from "./Content.module.css";
import {Profile} from "./Profile/Profile";
import {PostMessageActionType, StateType} from "../../redux/reduxStore";
import {ConversationsContainer} from "./Conversations/ConversationsContainer";

type ContentType = {
    data: StateType
    dispatch: (action: PostMessageActionType) => void
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
        </Routes>
    </div>
}