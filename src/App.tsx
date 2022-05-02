import React from 'react';
import "./App.css"
import {NavBar} from "./components/NavBar/NavBar";
import {Content} from "./components/Content/Content";
import {PostAndMessageActionType, StateType} from "./redux/reduxStore";
import {HeaderContainerWithRouter} from "./components/Header/HeaderContainer";

type AppType = {
    data: StateType
    dispatch: (action: PostAndMessageActionType) => void
}


export const App = (props: AppType) => {
    // debugger

    return (

        <div className={"app-wrapper"}>
            <HeaderContainerWithRouter/>
            <NavBar/>
            <Content
                // data={props.data}
                //      dispatch={props.dispatch}
            />
        </div>

    );
}