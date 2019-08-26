import {
    POST_LOGIN_START,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_FAIL
} from '../actions'

const initialState = {
    listings: [],
    error: '',
    isLoggedIn: false,
    isLoading: false
}

export const businessRecommendReducer = (state=initialState, action) => {
    
    switch(action.type)
    {
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
        default:
            return state
    }
}