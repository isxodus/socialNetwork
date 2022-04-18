import {UsersPageActionType, UsersPageType, UserType} from "./reduxStore";


// INITIAL STATE
let initialReducerState: UsersPageType = {
    users: [
        // {id: '1', fullName: 'Dima', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}, followStatus: true},
        // {id: '2', fullName: 'Kolya', status: 'I am cool', location: {city: 'Moscow', country: 'Russia'}, followStatus: true},
        // {id: '3', fullName: 'Vasa', status: 'dont want to share', location: {city: 'Moscow', country: 'Russia'}, followStatus: false}
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
}


//REDUCER
export const usersPageReducer = (reducerState: UsersPageType = initialReducerState, action: UsersPageActionType): UsersPageType => {
    switch (action.type) {
        case 'TOGGLE_FOLLOW':
            return {
                ...reducerState,
                users: reducerState.users.map(user => {
                    if (user.id === action.userId) user.followed = !user.followed
                    return user
                })
            }
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...reducerState,
                totalUsersCount: action.totalUsersCount ? action.totalUsersCount : 0
            }
        case 'SET_USERS':
            return {
                ...reducerState,
                users: [...action.users ? action.users : []]
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...reducerState,
                users: [...reducerState.users],
                currentPage: action.currentPage ? action.currentPage : 1
            }
        default:
            return reducerState
    }
}


//ACTION CREATORS
export const followAC = (userId: string): UsersPageActionType => ({type: 'TOGGLE_FOLLOW', userId: userId})
export const setTotalUserCountAC = (count: number): UsersPageActionType => ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount: count})
export const setUsersAC = (users: Array<UserType>): UsersPageActionType => ({type: 'SET_USERS', users: users})
export const setCurrentPageAC = (page: number): UsersPageActionType => ({type: 'SET_CURRENT_PAGE', currentPage: page})