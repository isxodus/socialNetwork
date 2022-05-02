//STATE TYPE
export type AuthStateType = {
    id: string
    email: string
    login: string
    isAuth: boolean
}
//TYPES
type SetUserDataActionType = {
    type: 'SET-AUTH-USER-DATA'
    data: {
        id: string
        email: string
        login: string
    }
}
type ActionType = SetUserDataActionType


//INITIAL STATE
let initialReducerState: AuthStateType = {
    id: '',
    email: '',
    login: '',
    isAuth: false
}


//REDUCER
export const authReducer = (reducerState: AuthStateType = initialReducerState, action: ActionType): AuthStateType => {

    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {
                ...reducerState
                , ...action.data
                , isAuth: true
            }
        default:
            return reducerState
    }
}


//ACTION TYPE CREATORS
export const setAuthUserData = (userId: string, email: string, login: string): SetUserDataActionType => ({
    type: 'SET-AUTH-USER-DATA',
    data: {id: userId, email: email, login: login}
})