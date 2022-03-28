import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import css from "./Content.module.css";
import {Profile} from "./Profile/Profile";
import {Messages} from "./Messages/Messages";

export function Content() {
    return <div>
        <Router>
            <Routes>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/messages" element={<Messages/>}/>
            </Routes>
        </Router>
    </div>
}