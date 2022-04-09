import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {store, subscribe, StateType} from './myRedux/state'

function reRenderEntireTree(gottenState: StateType) {
    ReactDOM.render(
        <React.StrictMode>
            <App profilePage={gottenState.profilePage}
                 conversationsGlobalInfo={gottenState.conversationsGlobalInfo}

                // state={globalStore.getState().}
                // reRenderEntireTree={globalStore.reRenderEntireTree}
                // profileAddPost={globalStore.profileAddPost}
                // profileChangePostHandler={globalStore.profileChangePostHandler}
                // getState={globalStore.getState()}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRenderEntireTree(store.getState())
subscribe(reRenderEntireTree)

// ReactDOM.render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>,
//     document.getElementById('root')
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
