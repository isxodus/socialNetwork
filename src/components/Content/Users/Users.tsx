import React from "react";
import css from "./Users.module.css"
import {UserType} from "../../../redux/reduxStore";
import userDefaultPhoto from "./../../../assets/userPhoto.png"

type UsersProps = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followUser: (userId: string) => void
    onPageChanged: (pageNumber: number) => void
}


export function Users(props: UsersProps) {
    let pageNumber = Math.floor(props.totalUsersCount / props.pageSize) + 1
    let pages = []
    for (let i = 1; i <= Math.min(pageNumber, 10); i++) {
        pages.push(i)
    }

    return <div className={css.userInfoContainer}>
        {/*those are page buttons*/}
        <div>pages {pages.map(el =>
            <span className={el === props.currentPage ? css.activeButton : ''}
                  onClick={() => props.onPageChanged(el)}>{String(el)}
                </span>)}
            {pageNumber > 10
                ? <span><span>...</span><span className={pageNumber === props.currentPage ? css.activeButton : ''}
                                              onClick={() => props.onPageChanged(pageNumber)}>{String(pageNumber)}</span></span>
                : <></>

            }

        </div>
        {/*those are for profile cards*/}
        {props.users.map(user =>
            <div className={css.userInfo}>
                <div className={css.avatar}>
                    <img src={user.photos.small === null ? userDefaultPhoto : user.photos.small}
                         alt="user"/>
                    <button onClick={() => props.followUser(user.id)}>{user.followed ? 'UNFOLLOW' : 'FOLLOW'}</button>
                </div>

                <div>{user.name} {user.status} </div>
            </div>)}
    </div>
}