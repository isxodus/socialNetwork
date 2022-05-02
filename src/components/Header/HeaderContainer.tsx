import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../redux/reduxStore";
import {AuthStateType, setAuthUserData} from "../../redux/authReducer";
import axios from "axios";
import {withRouter} from "../../componentsUniversal/withRouter/withRouter";
import {Header} from "./Header";


//CLASS COMPONENT TYPE
type HeaderPropsType = {
    auth: AuthStateType
    setAuthUserData: (userId: string, email: string, login: string) => void
}

//CLASS COMPONENT
export class HeaderAPIContainer extends React.Component<HeaderPropsType> {
    // constructor(props: UserProps) {
    //     super(props);
    // }

    componentDidMount() {

        // console.log(this.props)
        // const userId = this.props.router.params['userId'] ? this.props.router.params['userId'] : '2'
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) this.props.setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login)
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

        return <Header auth={this.props.auth}/>
    }
}


//STATE CONNECT
let mapStateToProps = (state: StateType) => {
    return {
        auth: state.auth
    }
}
//DISPATCH CONNECT
let mapDispatchToProps = {setAuthUserData}


//CONTAINERS
export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer)
export const HeaderContainerWithRouter = withRouter(HeaderContainer)
