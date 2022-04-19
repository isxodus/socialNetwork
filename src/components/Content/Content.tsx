import React from "react";
import {Route, Routes} from 'react-router-dom';
// import css from "./Content.module.css";
// import {PostAndMessageActionType, StateType} from "../../redux/reduxStore";
import {ConversationsContainer} from "./Conversations/ConversationsContainer";
import {UsersContainer} from "./Users/UsersContainer";
import {ProfileContainer} from "./Profile/ProfileContainer";

// type ContentType = {
//     data: StateType
//     dispatch: (action: PostAndMessageActionType) => void
// }

export function Content() {
    return <div>
        <Routes>
            <Route path="/" element={<ProfileContainer/>}/>
            <Route path="/profile/*" element={<ProfileContainer/>}/>
            {/*<Route path="/profile/*"*/}
            {/*       element={<Profile data={props.data.profilePage}*/}
            {/*                         dispatch={props.dispatch}/>}/>*/}
            <Route path="/conversations/*"
                   element={<ConversationsContainer/>}/>
            <Route path="/users/*"
                   element={<UsersContainer/>}/>
        </Routes>
    </div>
}