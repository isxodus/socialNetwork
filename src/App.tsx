import React from 'react';
import {BrowserRouter} from "react-router-dom"
import "./App.css"
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Content} from "./components/Content/Content";
import {StateType} from "./myRedux/state";


const App = (props: StateType) => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <NavBar/>
                <Content profilePage={props.profilePage}
                         conversationsGlobalInfo={props.conversationsGlobalInfo}/>
            </div>
        </BrowserRouter>
    );
}

export default App;