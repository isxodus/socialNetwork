import {connect} from "react-redux";
import {StateType, UsersPageActionType, UserType} from "../../../redux/reduxStore";
import {followAC, setUsersAC} from "../../../redux/usersReducer";
import {Users} from "./Users";

let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: (action: UsersPageActionType) => void) => {
    return {
        followUser: (userId: string) => {
            dispatch(followAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
