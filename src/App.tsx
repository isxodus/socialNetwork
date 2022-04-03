import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Content} from "./components/Content/Content";


const App = () => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <NavBar/>
                <Content/>
            </div>
        </BrowserRouter>
    );
}

export default App;