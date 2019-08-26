import {
    POST_LOGIN_START,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_FAIL,
    POST_REGISTER_START,
    POST_REGISTER_SUCCESS,
    POST_REGISTER_FAIL,
    LOGOUT_USER
} from '../actions'

const initialState = {
    listings: [],
    error: '',
    isLoggedIn: false,
    isLoading: false
}

export const businessRecommendReducer = (state = initialState, action) => {

    switch (action.type) {
        case POST_LOGIN_START:
            return {
                ...state,
                isLoading: true
            }
        case POST_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true
            }
        case POST_LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case POST_REGISTER_START:
            return {
                ...state,
                isLoading: true
            }
        case POST_REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case POST_REGISTER_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case LOGOUT_USER:
            return {
                ...state,
                isLoggedIn: false
            }
        default:
            return state
    }
}