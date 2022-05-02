import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {StateType, UserType} from "../../../redux/reduxStore";
import {followUser, setCurrentPage, setTotalUserCount, setUsers, toggleIsFetching} from "../../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../../Common/Preloader";


// CLASS COMPONENT TYPE
type UserProps = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followUser: (userId: string) => void
    setTotalUserCount: (count: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

// CLASS COMPONENT
export class UsersAPIContainer extends React.Component<UserProps, any> {
    // constructor(props: UserProps) {
    //     super(props);
    // }


    componentDidMount() {
        this.props.toggleIsFetching(true)

        // console.log(location, navigate)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.setTotalUserCount(response.data.totalCount)
            this.props.setUsers(response.data.items)
            this.props.toggleIsFetching(false)
        })

    }

    onPageChanged = (pageNumber: number) => {
        console.log('fetching')
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.setUsers(response.data.items)
            this.props.toggleIsFetching(false)
        })

    }

    // localComponent = ComponentWithRouter6Router()

    render() {
        return <>
            <Preloader isFetching={this.props.isFetching}/>

            <Users users={this.props.users} totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   followUser={this.props.followUser} onPageChanged={this.onPageChanged} toggleIsFetching={this.props.toggleIsFetching}/>

        </>
    }
}


// STATE CONNECT
let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
// SMART SYNTAX TO DISPATCH
let mapDispatchToProps = {
    followUser,
    setTotalUserCount,
    setUsers,
    setCurrentPage,
    toggleIsFetching
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

