import React from "react";
import {connect} from "react-redux";
import {ProfileInfoType, ProfilePageType, StateType} from "../../../redux/reduxStore";
import axios from "axios";
import {addPost, onPostChangeHandler, setProfile} from "../../../redux/profilePageReducer";
import {Profile} from "./Profile";
import {withRouter, WithRouterType} from "../../../componentsUniversal/withRouter/withRouter";
import {withAuthRedirectHOC} from "../../../componentsUniversal/withAuthRedirectHOC/withAuthRedirectHOC";
import {compose} from "redux";


//CLASS COMPONENT TYPE
type ProfileProps = {
    router: WithRouterType
    data: ProfilePageType
    addPost: () => void
    onPostChangeHandler: (newText: string) => void
    setProfile: (profileInfo: ProfileInfoType) => void
}

//CLASS COMPONENT
class ProfileAPIContainer extends React.Component<ProfileProps> {
    // constructor(props: UserProps) {
    //     super(props);
    // }

    componentDidMount() {

        const userId = this.props.router.params['userId'] ? this.props.router.params['userId'] : '2'
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
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


//STATE CONNECT
let mapStateToProps = (state: StateType) => {
    return {
        data: state.profilePage,
    }
}
//DISPATCH CONNECT
let mapDispatchToProps = {addPost, onPostChangeHandler, setProfile}

//COMPOSE
export const ProfileContainer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectHOC
)(ProfileAPIContainer)
// export const ProfileContainerWithAuth = withAuthRedirectHOC(ProfileAPIContainer)
// export const ProfileContainerWithConnect = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerWithAuth)
// export const ProfileContainerWithRouter = withRouter(ProfileContainerWithConnect)
