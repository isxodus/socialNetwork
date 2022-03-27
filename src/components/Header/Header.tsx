import React from "react";
import css from './Header.module.css'

export function Header() {
    return <header className={css.header}>
        <img src={"https://seeklogo.com/images/B/business-company-logo-C561B48365-seeklogo.com.png"}
             alt={"Company logo"}/>
    </header>
}