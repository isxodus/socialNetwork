import React from "react";
import css from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthStateType} from "../../redux/authReducer";

type HeaderPropsType = {
    auth: AuthStateType
}

export function Header(props: HeaderPropsType) {

    return <header className={css.header}>
        <img src={"https://seeklogo.com/images/B/business-company-logo-C561B48365-seeklogo.com.png"}
             alt={"Company logo"}/>
        <div className={css.loginBlock}>
            {props.auth.isAuth
                ? props.auth.login
                : <NavLink to={'/login'}>Login</NavLink>

            }
        </div>
    </header>
}