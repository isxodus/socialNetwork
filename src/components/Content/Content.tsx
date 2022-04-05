import React from "react";
import {Routes, Route} from 'react-router-dom';
import css from "./Content.module.css";
import {Profile} from "./Profile/Profile";
import {Conversations} from "./Conversations/Conversations";
import {StateType} from "../../myRedux/state";

export function Content(props: StateType) {
    return <div>
        <Routes>
            <Route path="/" element={<Profile profileInfo={props.profilePage.profileInfo}
                                              profilePosts={props.profilePage.profilePosts}/>}/>
            {/*<Route path="/profile/*" element={<Profile />}/>*/}
            <Route path="/profile/*"
                   element={<Profile profileInfo={props.profilePage.profileInfo}
                                     profilePosts={props.profilePage.profilePosts} />}/>
            <Route path="/conversations/*"
                   element={<Conversations conversationsArray={props.conversationsGlobalInfo}/>}/>
        </Routes>
    </div>
}