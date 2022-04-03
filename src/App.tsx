import React from 'react';
import {BrowserRouter} from "react-router-dom"
import "./App.css"
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Content} from "./components/Content/Content";
import {state} from "./myRedux/state";

const App = () => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <NavBar/>
                <Content profilePage={state.profilePage}
                         conversationsGlobalInfo={state.conversationsGlobalInfo}/>
            </div>
        </BrowserRouter>
    );
}

export default App;