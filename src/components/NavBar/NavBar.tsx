import React from "react";
import css from "./NavBar.module.css"

export function NavBar() {
    return <nav className={css.nav}>
        <div className={css.item}>Profile</div>
        <div className={css.item}>Messages</div>
        <div className={css.item}>News</div>
        <div className={css.item}>else</div>
        <div className={css.item}>settings</div>
    </nav>
}
