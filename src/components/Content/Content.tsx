import React from "react";
import {Route, Routes, Navigate} from 'react-router-dom';
// import css from "./Content.module.css";
// import {PostAndMessageActionType, StateType} from "../../redux/reduxStore";
import {ConversationsContainer} from "./Conversations/ConversationsContainer";
import {UsersContainer} from "./Users/UsersContainer";
import {ProfileContainerWithRouter} from "./Profile/ProfileContainer";

// type ContentType = {
//     data: StateType
//     dispatch: (action: PostAndMessageActionType) => void
// }


export function Content() {
    // const UsersContainerWithRouter = withRouter(UsersContainer)


    return <div>
        <Routes>
            <Route path='/profile' element={<Navigate to={'/profile/2'}/>}/>
            <Route path="/profile/:userId" element={<ProfileContainerWithRouter/>}/>
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