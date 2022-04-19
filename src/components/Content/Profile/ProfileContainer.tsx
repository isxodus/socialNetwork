import React from "react";
import {connect} from "react-redux";
import {ProfileInfoType, ProfilePageType, StateType} from "../../../redux/reduxStore";
import axios from "axios";
import {addPost, onPostChangeHandler, setProfile} from "../../../redux/profilePageReducer";
import {Profile} from "./Profile";


// CLASS COMPONENT TYPE
type ProfileProps = {
    data: ProfilePageType
    addPost: () => void
    onPostChangeHandler: (newText: string) => void
    setProfile: (profileInfo: ProfileInfoType) => void
}

// CLASS COMPONENT
export class ProfileAPIContainer extends React.Component<ProfileProps> {
    // constructor(props: UserProps) {
    //     super(props);
    // }

    componentDidMount() {
        // this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setProfile(response.data)
        })

    }

    onPageChanged = () => {
        // console.log('fetching')
        // this.props.toggleIsFetching(true)
        // this.props.setCurrentPage(pageNumber)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
        //     this.props.setUsers(response.data.items)
        //     this.props.toggleIsFetching(false)
        // })
    }

    render() {
        return <Profile data={this.props.data} addPost={addPost} onPostChangeHandler={onPostChangeHandler}/>
    }
}


// STATE CONNECT
let mapStateToProps = (state: StateType) => {
    return {
        data: state.profilePage
    }
}
// DISPATCH CONNECT
let mapDispatchToProps = {addPost, onPostChangeHandler, setProfile}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPIContainer)