import React from "react";
import {Routes, Route} from 'react-router-dom';
// import css from "./Content.module.css";
import {Profile} from "./Profile/Profile";
import {Conversations} from "./Conversations/Conversations";
import {ActionType, StateType} from "../../redux/reduxStore";

type ContentType = {
    data: StateType
    dispatch: (action: ActionType) => void
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
                   element={<Conversations data={props.data.conversationsPage}
                                           dispatch={props.dispatch}/>}/>
        </Routes>
    </div>
}