import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state: any) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirectHOC(CalledComponent: any) {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Routes><Route path="*" element={<Navigate to={'/login'}/>}/></Routes>
            return <CalledComponent {...this.props}/>
        }
    }

    let RedirectComponentWithAuth = connect(mapStateToProps)(RedirectComponent)

    return RedirectComponentWithAuth
}