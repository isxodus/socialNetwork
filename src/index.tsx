import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {StateType} from './myRedux/state'
import {store} from './myRedux/reduxStore'

function renderApp(state: StateType) {
    ReactDOM.render(
        <React.StrictMode>
            <App data={state}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderApp(store.getState())
store.subscribe(() => renderApp(store.getState()))