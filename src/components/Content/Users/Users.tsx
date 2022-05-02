import React from "react";
import css from "./Users.module.css"
import {UserType} from "../../../redux/reduxStore";
import userDefaultPhoto from "./../../../assets/userPhoto.png"
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersProps = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followUser: (userId: string) => void
    onPageChanged: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
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
                    {user.followed
                        ? <button onClick={() => {

                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                withCredentials: true, headers: {
                                    "API-KEY": "48169160-cec4-4970-9d28-0ecb4c6641d9"
                                }
                            }).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.followUser(user.id)

                                }
                                // this.props.setTotalUserCount(response.data.totalCount)
                                // this.props.setUsers(response.data.items)
                                // this.props.toggleIsFetching(false)
                            })

                        }
                        }>'UNFOLLOW'</button>
                        : <button onClick={() => {

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}
                                , {
                                    withCredentials: true
                                    , headers: {
                                        "API-KEY": "48169160-cec4-4970-9d28-0ecb4c6641d9"
                                    }
                                }).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.followUser(user.id)

                                }
                                // this.props.setTotalUserCount(response.data.totalCount)
                                // this.props.setUsers(response.data.items)
                                // this.props.toggleIsFetching(false)
                            })

                        }
                        }>'FOLLOW'</button>}


                </div>

                <div>{user.name} {user.status} </div>
            </div>)}
    </div>
}