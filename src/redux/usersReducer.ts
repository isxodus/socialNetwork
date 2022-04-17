import {UsersPageActionType, UsersPageType, UserType} from "./reduxStore";


// INITIAL STATE
let initialReducerState: UsersPageType = {
    users: [
        {id: '1', fullName: 'Dimon', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}, followStatus: true},
        {id: '2', fullName: 'Kolyan', status: 'I am cool', location: {city: 'Moscow', country: 'Russia'}, followStatus: true},
        {id: '3', fullName: 'Vasya', status: 'dont want to share', location: {city: 'Moscow', country: 'Russia'}, followStatus: false}
    ],
}


//REDUCER
export const usersPageReducer = (reducerState: UsersPageType = initialReducerState, action: UsersPageActionType): UsersPageType => {
    switch (action.type) {
        case 'TOGGLE_FOLLOW':
            return {
                ...reducerState,
                users: reducerState.users.map(user => {
                    if (user.id === action.userId) user.followStatus = !user.followStatus
                    return user
                })
            }
        case  'SET_USERS':
            return {
                ...reducerState,
                users: [...reducerState.users, ...action.users ? action.users : []]

            }
        default:
            return reducerState
    }
}


//ACTION CREATORS
export const followAC = (userId: string): UsersPageActionType => ({type: 'TOGGLE_FOLLOW', userId: userId})
export const setUsersAC = (users: Array<UserType>): UsersPageActionType => ({type: 'SET_USERS', users: users})