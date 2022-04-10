import React from 'react';
import {BrowserRouter} from "react-router-dom"
import "./App.css"
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Content} from "./components/Content/Content";
import {ActionType, StateType} from "./redux/reduxStore";

type AppType = {
    data: StateType
    dispatch: (action: ActionType) => void
}

export const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <NavBar/>
                <Content data={props.data}
                         dispatch={props.dispatch}/>
            </div>
        </BrowserRouter>
    );
}