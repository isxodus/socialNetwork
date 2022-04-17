import React from "react";
import css from "./Users.module.css"
import {UserType} from "../../../redux/reduxStore";


type UsersPagePropsType = {
    users: Array<UserType>
    followUser: (userId: string) => void
}

export function Users(props: UsersPagePropsType) {
    return <div className={css.userInfoContainer}>
        {props.users.map(user =>
            <div className={css.userInfo} key={user.id}>
                <div className={css.avatar}>
                    <img
                        src="https://www.mcicon.com/wp-content/uploads/2021/01/People_User_1-copy-4-600x600.jpg"
                        alt="user imange"/>
                    <button onClick={() => props.followUser(user.id)}>{user.followStatus ? 'UNFOLLOW' : 'FOLLOW'}</button>
                </div>
                <div>{user.fullName} {user.status} {user.location.city + ' ' + user.location.country}</div>
            </div>)}
    </div>
}