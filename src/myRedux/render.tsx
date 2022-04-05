import React from 'react';
import ReactDOM from 'react-dom';
import './render.css';
import App from './../App';
import {GlobalStateType} from './state'

export const reRenderEntireTree = (globalState: GlobalStateType) =>
ReactDOM.render(
    <React.StrictMode>
        <App state={globalState.state}/>
    </React.StrictMode>,
    document.getElementById('root')
);