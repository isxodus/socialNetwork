import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import './index.css';
import {App} from './App';
import {store} from './redux/reduxStore'

//
// function renderApp() {
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App data={store.getState()}
                     dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
// }
//
// renderApp()
// store.subscribe(() => renderApp())

