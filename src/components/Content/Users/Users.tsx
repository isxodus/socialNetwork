import React from "react";
import css from "./Users.module.css"
import {UserType} from "../../../redux/usersReducer";
import userDefaultPhoto from "./../../../assets/userPhoto.png"
import {NavLink} from "react-router-dom";


type UsersProps = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    // followUser: (userId: string) => void
    onPageChanged: (pageNumber: number) => void
    // toggleIsFetching: (isFetching: boolean) => void
    // toggleUserIsFetching: (isUserFetching: boolean, userId: string) => void
    isUserFetching: Array<string>
    followThunkCreator: (userId: string, followed: boolean) => void
}


export function Users(props: UsersProps) {
    let pageNumber = Math.floor(props.totalUsersCount / props.pageSize) + 1
    let pages = [], lastPages = []
    for (let i = 1; i <= Math.min(pageNumber, 10); i++) {
        pages.push(i)
    }
    for (let i = pageNumber - 10; i <= pageNumber; i++) {
        lastPages.push(i)
    }


    return <div className={css.userInfoContainer}>
        {/*those are page buttons*/}
        <div>Pages: {pages.map(el =>
            <span className={el === props.currentPage ? css.activeButton : ''}
                  onClick={() => props.onPageChanged(el)}>{String(el)}_
                </span>)}
            <span>...</span>
            {lastPages.map(el =>
                <span className={el === props.currentPage ? css.activeButton : ''}
                      onClick={() => props.onPageChanged(el)}>_{String(el)}
                </span>)}

        </div>
        {/*those are for profile cards*/}
        {props.users.map(user =>
            <div className={css.userInfo}>
                <div className={css.avatar}>
                    <NavLink to={"/profile/" + user.id}>
                        <img src={user.photos.small === null ? userDefaultPhoto : user.photos.small}
                             alt="user"/>
                    </NavLink>
                    <button disabled={props.isUserFetching.some(id => id === user.id)}
                            onClick={() => props.followThunkCreator(user.id, user.followed)}>
                        {user.followed ? "UNFOLLOW" : "FOLLOW"}
                    </button>
                </div>

                <div>{user.name} {user.status} </div>
            </div>)}
    </div>
}