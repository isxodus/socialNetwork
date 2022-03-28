import React from "react";
import {NavLink} from "react-router-dom";
import css from "./NavBar.module.css"

export function NavBar() {
    return <nav className={css.nav}>
        {/*<div className={css.item}>*/}
        <NavLink to={"/profile"}>qqqq</NavLink>
        {/*</div>*/}
        {/*<div className={css.item}><NavLink to={"/messages"}>Messages</NavLink></div>*/}
        <div className={css.item}>News</div>
        <div className={css.item}>else</div>
        <div className={css.item}>settings</div>

    </nav>
}
