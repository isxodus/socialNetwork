import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {conversationsReducer} from "./conversationsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    conversationsPage: conversationsReducer
})
export let store = createStore(reducers)