import React from "react";
import {Route, Routes, Navigate} from 'react-router-dom';
// import css from "./Content.module.css";
// import {PostAndMessageActionType, StateType} from "../../redux/reduxStore";
import {ConversationsContainer} from "./Conversations/ConversationsContainer";
import {UsersContainer} from "./Users/UsersContainer";
import {ProfileContainer} from "./Profile/ProfileContainer";
import {LoginPage} from "./Login/Login";

// type ContentType = {
//     data: StateType
//     dispatch: (action: PostAndMessageActionType) => void
// }


export function Content() {
    // const UsersContainerWithRouter = withRouter(UsersContainer)


    return <div>
        <Routes>
            <Route path='/profile' element={<Navigate to={'/profile/23478'}/>}/>
            <Route path="/profile/:userId" element={<ProfileContainer/>}/>
            {/*<Route path="/profile/*"*/}
            {/*       element={<Profile data={props.data.profilePage}*/}
            {/*                         dispatch={props.dispatch}/>}/>*/}
            <Route path="/conversations/*"
                   element={<ConversationsContainer/>}/>
            <Route path="/users/*"
                   element={<UsersContainer/>}/>
            {/*<Route path="/login/*"*/}
            {/*       element={<LoginPage isAuth={true}/>}/>*/}
        </Routes>
    </div>
}