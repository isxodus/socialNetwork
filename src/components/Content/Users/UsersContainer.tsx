import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import {connect} from "react-redux";
import {followThunkCreator, getUsersThunkCreator, UserType} from "../../../redux/usersReducer";
import {usersAPI} from "../../../api/api";
import {setCurrentPage, setTotalUserCount, setUsers, toggleIsFetching} from "../../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../../Common/Preloader";
import {StateType} from "../../../redux/reduxStore";


//CLASS COMPONENT TYPE
type UserProps = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    // followUser: (userId: string) => void
    setTotalUserCount: (count: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    // toggleUserIsFetching: (isUserFetching: boolean, userId: string) => void
    isUserFetching: Array<string>
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    followThunkCreator: (userId: string, followed: boolean) => void
    isAuth: boolean
}

//CLASS COMPONENT
export class UsersAPIContainer extends React.Component<UserProps, any> {
    // constructor(props: UserProps) {
    //     super(props);
    // }


    componentDidMount() {
        this.props.getUsersThunkCreator(1, 10)
        // this.props.toggleIsFetching(true)
        //
        // // console.log(location, navigate)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.setTotalUserCount(data.totalCount)
        //     this.props.setUsers(data.items)
        //     this.props.toggleIsFetching(false)
        // })

    }

    onPageChanged = (pageNumber: number) => {
        console.log('fetching')
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.toggleIsFetching(false)
        })

    }


    render() {
        if (!this.props.isAuth) return <Routes><Route path="*" element={<Navigate to={'/login'}/>}/></Routes>
        return <>
            <Preloader isFetching={this.props.isFetching}/>

            <Users users={this.props.users} totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}

                   onPageChanged={this.onPageChanged}

                   isUserFetching={this.props.isUserFetching}
                   followThunkCreator={this.props.followThunkCreator}/>

        </>
    }
}


//STATE CONNECT
let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isUserFetching: state.usersPage.isUserFetching,
        isAuth: state.auth.isAuth
    }
}
//SMART SYNTAX TO DISPATCH
let mapDispatchToProps = {
    // followUser,
    setTotalUserCount,
    setUsers,
    setCurrentPage,
    toggleIsFetching,
    // toggleUserIsFetching,
    //thunk creators
    getUsersThunkCreator,
    followThunkCreator
}
//OBVIOUS SYNTAX TO DISPATCH
// let mapDispatchToProps = (dispatch: (action: UsersPageActionType) => void) => {
//     return {
//         followUser: (userId: string) => {
//             dispatch(followAC(userId))
//         },
//         setTotalUserCount: (count: number) => {
//             dispatch(setTotalUserCountAC(count))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (page: number) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//
//     }
// }


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

