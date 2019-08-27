import {
    POST_LOGIN_START,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_FAIL,
    POST_REGISTER_START,
    POST_REGISTER_SUCCESS,
    POST_REGISTER_FAIL,
    LOGOUT_USER,
    GET,
    PUSH,
    FAILED,
    PUT_DATA_START,
    PUT_DATA_SUCCESS,
    PUT_DATA_FAIL,
    DELETE_DATA_START,
    DELETE_DATA_SUCCESS,
    DELETE_DATA_FAIL
} from '../actions'

const initialState = {
    listings: [],
    error: '',
    isLoggedIn: localStorage.getItem('token') ? true : false,
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
        case GET:
            return{
                ...state,
                listings: action.payload,
                error: ''
            }
        case PUSH:
            return{
                ...state,
                listings: [...state.listings, action.payload],
                error:''
            }
        case FAILED:
            return{
                ...state,
                error:'There is an error'
            }
        case PUT_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case PUT_DATA_SUCCESS:
            return {
                ...state,
                listings: action.payload,
                isLoading: false,
                error: ''
            }
        case PUT_DATA_FAIL:
            return {
                ...state,
                isLoading: false,
                error: `${action.payload.status} ${action.payload.statusText} - ${action.payload.data.Error}` //may need to change pending how it comes in
            }
        case DELETE_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case DELETE_DATA_SUCCESS:
            return {
                ...state,
                listings: action.payload,
                isLoading: false,
                error: ''
            }
        case DELETE_DATA_FAIL:
            return {
                ...state,
                isLoading: false,
                error: `${action.payload.status} ${action.payload.statusText} - ${action.payload.data.Error}` //may need to change pending how it comes in
            }
        default:
            return state
    }
}