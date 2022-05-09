//ENTITY TYPES
import {usersAPI} from "../api/api";

export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    /**
     * here a whole page fetching status is stored
     */
    isFetching: boolean
    /**
     * here a userId is stored in an array when user is being fetched
     */
    isUserFetching: Array<string>
}
export type UserType = {
    id: string
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type PhotosType = {
    large: string
    small: string
}
//ACTION TYPES
type ToggleUserIsFetchingType = {
    type: 'TOGGLE_USER_IS_FETCHING'
    isUserFetching: boolean
    userId: string
}
//FINAL ACTION TYPE
export type UsersPageActionType = {
    type: 'TOGGLE_FOLLOW' | "SET_USERS" | "SET_TOTAL_USERS_COUNT" | "SET_CURRENT_PAGE" | 'TOGGLE_IS_FETCHING'
    userId?: string
    users?: Array<UserType>
    totalUsersCount?: number
    currentPage?: number
    isFetching?: boolean
} | ToggleUserIsFetchingType


// INITIAL STATE
let initialReducerState: UsersPageType = {
    users: [
        // {id: '1', fullName: 'Dima', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}, followStatus: true},
        // {id: '2', fullName: 'Kolya', status: 'I am cool', location: {city: 'Moscow', country: 'Russia'}, followStatus: true},
        // {id: '3', fullName: 'Vasa', status: 'dont want to share', location: {city: 'Moscow', country: 'Russia'}, followStatus: false}
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isUserFetching: []
}


//REDUCER
export const usersPageReducer = (reducerState: UsersPageType = initialReducerState, action: UsersPageActionType): UsersPageType => {
    switch (action.type) {
        case 'TOGGLE_IS_FETCHING':
            return {...reducerState, isFetching: action.isFetching ? action.isFetching : false}
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
        case 'TOGGLE_USER_IS_FETCHING':
            return {
                ...reducerState,
                isUserFetching: action.isUserFetching
                    ? [...reducerState.isUserFetching, action.userId]
                    : reducerState.isUserFetching.filter(id => id !== action.userId)
            }
        default:
            return reducerState
    }
}


//ACTION CREATORS
const followUser = (userId: string): UsersPageActionType => ({type: 'TOGGLE_FOLLOW', userId: userId})
export const setTotalUserCount = (count: number): UsersPageActionType => ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount: count})
export const setUsers = (users: Array<UserType>): UsersPageActionType => ({type: 'SET_USERS', users: users})
export const setCurrentPage = (page: number): UsersPageActionType => ({type: 'SET_CURRENT_PAGE', currentPage: page})
export const toggleIsFetching = (isFetching: boolean): UsersPageActionType => ({type: 'TOGGLE_IS_FETCHING', isFetching: isFetching})
const toggleUserIsFetching = (isUserFetching: boolean, userId: string): ToggleUserIsFetchingType => ({
    type: 'TOGGLE_USER_IS_FETCHING',
    isUserFetching: isUserFetching,
    userId: userId
})


//THUNK CREATORS
export const getUsersThunkCreator = (currentPage: number = 1, pageSize: number = 10) => {
    return (dispatch: (actionCreator: UsersPageActionType) => void) => {
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setTotalUserCount(data.totalCount))
            dispatch(setUsers(data.items))
            dispatch(toggleIsFetching(false))
        })
    }
}
export const followThunkCreator = (userId: string, followed: boolean) => {
    return (dispatch: (actionCreator: UsersPageActionType) => void) => {
        dispatch(toggleUserIsFetching(true, userId))
        followed
            ? usersAPI.unfollowUser(userId).then(data => {
                if (data.resultCode === 0) {
                    dispatch(followUser(userId))
                    dispatch(toggleUserIsFetching(false, userId))
                }
            })
            : usersAPI.followUser(userId).then(data => {
                if (data.resultCode === 0) {
                    dispatch(followUser(userId))
                    dispatch(toggleUserIsFetching(false, userId))
                }
            })
    }

}
