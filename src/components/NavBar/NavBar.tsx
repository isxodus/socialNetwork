import React from "react";
import {NavLink} from "react-router-dom";
import css from "./NavBar.module.css"

export function NavBar() {
    return <nav className={css.nav}>
        {/*<div className={css.item}>*/}
        <div><NavLink className={({isActive}) => isActive ? css.itemActive : css.item}
                      to={"/profile"}>Profile</NavLink>
        </div>
        <div><NavLink className={({isActive}) => isActive ? css.itemActive : css.item}
                      to={"/conversations"}>Conversations</NavLink>
        </div>
        {/*</div>*/}
        {/*<div className={css.item}><NavLink to={"/messages"}>Conversations</NavLink></div>*/}
        <div className={css.item}>News</div>
        <div className={css.item}>else</div>
        <div>___</div>
        <div><NavLink className={({isActive}) => isActive ? css.itemActive : css.item}
                      to={"/users"}>Users</NavLink></div>
        <div className={css.item}>settings</div>

    </nav>
}
