import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {StateType, UsersPageActionType, UserType} from "../../../redux/reduxStore";
import {followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC} from "../../../redux/usersReducer";
import {Users} from "./Users";


// CLASS COMPONENT TYPE
type UserProps = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followUser: (userId: string) => void
    setTotalUserCount: (count: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
}

// CLASS COMPONENT
export class UsersAPIContainer extends React.Component<UserProps, any> {
    // constructor(props: UserProps) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setTotalUserCount(response.data.totalCount)
            this.props.setUsers(response.data.items)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        console.log(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <Users users={this.props.users} totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      followUser={this.props.followUser} onPageChanged={this.onPageChanged}/>
    }
}


// STATE CONNECT
let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: (action: UsersPageActionType) => void) => {
    return {
        followUser: (userId: string) => {
            dispatch(followAC(userId))
        },
        setTotalUserCount: (count: number) => {
            dispatch(setTotalUserCountAC(count))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

